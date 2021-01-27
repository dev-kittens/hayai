
const { FormTitle } = require('powercord/components');
const { TextInput, SwitchItem } = require('powercord/components/settings');
const { React, getModule } = require('powercord/webpack');

module.exports = React.memo(({ getSetting, updateSetting, toggleSetting }) => (
	<div>
		<TextInput
			note='The emoji (in unicode) you want to react with.'
			defaultValue={getSetting('emoji', '👍')}
			required={true}
			onChange={val => updateSetting('emoji', val)}
		>
			Unicode Emoji
		</TextInput>
	</div>
))