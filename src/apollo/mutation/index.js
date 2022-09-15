import gql from 'graphql-tag'

export const upload = gql`
	mutation upload($file: Upload!) {
		upload(file: $file) {
			id
			width
			url
		}
	}
`
