const groupNameMinLength = 3
const groupNameMaxLength = 30

export const regexpGroupName = new RegExp(
  `^[^\\s].{${groupNameMinLength - 2},${groupNameMaxLength}}[^\\s]$`
)

export const errorGroupNameInvalid = `Group name can consist of any chars without spaces at the beginning and end. Length: ${groupNameMinLength}-${groupNameMaxLength} chars.`
export const errorGroupAlreadyExists = 'The group already exists!'
