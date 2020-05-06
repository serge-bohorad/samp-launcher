import { regexpGroupName, errorGroupNameInvalid, errorGroupAlreadyExists } from './data'

import {
  setSelectedGroup,
  setGroups,
  findGroupByIdOrDefault,
  isGroupNameAvailable,
  addGroup,
  getSelectedGroup,
  deleteGroup,
  renameGroup,
  isSelectedGroup
} from '@app/stores/group'
import { Group } from '@shared/types/entities/group'

// Gets groups from the main process and puts them in the store
export async function onFetchGroups(): Promise<void> {
  const [groups] = await invokeMain('GROUP_FETCH')

  if (groups!.isEmpty()) {
    return
  }

  setGroups(groups!)

  const initialSelectedGroup = findSelectedGroupInIntialArray(groups!)
  const nextSelectedGroup = findGroupByIdOrDefault(initialSelectedGroup?.id)

  // Set a group as selected after putting, because mobX wraps objects so references change
  setSelectedGroup(nextSelectedGroup)
}

// Creates a new group with a specific name and puts it in the store
export async function onCreateGroup(groupName: string): Promise<string | void> {
  if (!isGroupNameValid(groupName)) {
    return errorGroupNameInvalid
  }

  if (!isGroupNameAvailable(groupName)) {
    return errorGroupAlreadyExists
  }

  const [newGroup, error] = await invokeMain('GROUP_CREATE', groupName)

  if (error) {
    return error
  }

  addGroup(newGroup!)
}

// Deletes a group from the database and from the store
export async function onDeleteGroup(targetGroup = getSelectedGroup()): Promise<void> {
  if (!targetGroup) {
    return
  }

  invokeMainUnilaterally('GROUP_DELETE', targetGroup.id)

  deleteGroup(targetGroup)
}

// Renames the name of a target group and changes its name in the database and in the store
export async function onRenameGroup(
  newGroupName: string,
  targetGroup = getSelectedGroup()
): Promise<string | void> {
  if (!targetGroup || targetGroup.name.equal(newGroupName)) {
    return
  }

  if (!isGroupNameValid(newGroupName)) {
    return errorGroupNameInvalid
  }

  if (!isGroupNameAvailable(newGroupName)) {
    return errorGroupAlreadyExists
  }

  invokeMainUnilaterally('GROUP_RENAME', { groupId: targetGroup.id, newGroupName })

  renameGroup(targetGroup, newGroupName)
}

export function onSwitchSelectedGroup(newSelectedGroup: Group): void {
  if (isSelectedGroup(newSelectedGroup)) {
    return
  }

  invokeMainUnilaterally('GROUP_SWITCH_SELECTED', newSelectedGroup.id)

  setSelectedGroup(newSelectedGroup)
}

// Finds a selected group in an array that received from main process
function findSelectedGroupInIntialArray(groups: Group[]): Group | undefined {
  return groups.find(({ selected }) => selected)
}

function isGroupNameValid(groupName: string): boolean {
  return regexpGroupName.test(groupName)
}
