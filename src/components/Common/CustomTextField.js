import React from 'react'
import { withStyles, TextField } from '@material-ui/core'

const StyledTextField = withStyles(theme => ({
    root: {
        '& .MuiInputLabel-root': {
            color: '#000',
            fontSize: 14,
            textTransform: 'capitalize',
            paddingLeft: '17px',
        },
        '& .MuiInputBase-formControl': {
            backgroundColor: "transparent",
            borderRadius: 5,
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d5d5d5'
            }
        },
        "& .MuiFilledInput-underline:before, .MuiFilledInput-underline:after": {
            content: "normal"
        },
        "& .MuiInputAdornment-root": {
            "& + .MuiInputBase-input": {
                borderLeft: 0,
                paddingLeft: 5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            }
        },
        '& .MuiInputBase-input': {
            color: '#333333',
            fontSize: 14,
            padding: '10px 15px',
            backgroundColor: "#fff",
            borderRadius: 5,
            height: 22,
            border: "1px solid #e0e0e0",
            '&:-webkit-autofill': {
                animation: 'none !important'
            },
            '&::placeholder': {
                color: "#656565",
                opacity: 1
            },
            '& .input:-internal-autofill-selected': {
                backgroundColor: '#F0F0F0 !important'
            },

        },
        '& .MuiInputBase-root': {
            '& .MuiInputAdornment-positionEnd': {
                paddingRight: theme.spacing(1) + 2,
                color: '#666666cc'
            }
        },
        '& .MuiOutlinedInput-root.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#EA0027'
            }
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#00bf71',
                borderWidth: 1
            }
        },

    }
}))(TextField)

export default function CustomTextField(props) {
    return <StyledTextField {...props} />
}
