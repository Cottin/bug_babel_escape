const t = require("@babel/types")


module.exports = ({ types: t }) => {
	return {
		visitor: {
			CallExpression: {
				exit(path, state) {
					path.replaceWith(t.stringLiteral('ö'))
				},
			},
		}
	}
}
