import { TypographyType, TypograpySize } from './themes'

export const Typography = ({ type, size, children, styles }) => {
    return (
        <p className={[TypographyType[type], TypograpySize[size], styles].join(' ')}>{children}</p>
    )
}
