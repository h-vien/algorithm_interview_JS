const tileLeftClassNames = [
    'left-0',
    'left-[-45px]',
    'left-[-70px]',
    'left-[-45px]',
    'left-0',
    'left-[45px]',
    'left-[70px]',
    'left-[45px]'
]

console.log(tileLeftClassNames.slice(4))
console.log([...tileLeftClassNames.slice(4), ...tileLeftClassNames.slice(0, 4)])