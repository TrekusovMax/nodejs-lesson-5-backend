const { Schema, model } = require("mongoose")

const schema = Schema(
	{
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = model("Quality", schema)
