import React, { useState } from 'react';
import {
	createMuiTheme,
	withStyles,
	MuiThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Sidebar from '../containers/sidebar';
import Main from '../containers/main';
import DefaultTheme from '../resources/default_theme';

// Global Styles for Home Section
const styles = () => ({
	containerApp: {
		display: 'flex',
		flexFlow: 'row nowrap',
		width: '100%',
		maxWidth: '100%',
		height: '100%',
		padding: '0',
		backgroundColor: 'transparent',
	},
});

function Login(props) {
	const { classes } = props;

	const [theme, setTheme] = useState(DefaultTheme);

	const handleChangeTheme = (section, value, [level, type]) => {
		let newTheme = Object.assign({}, theme);
		level === ''
			? (newTheme[section][type] = value)
			: (newTheme[section][level][type] = value);
		setTheme(newTheme);

		//! Impresión del resultado
		//console.log(newTheme);
	};

	return (
		<MuiThemeProvider theme={createMuiTheme(theme)}>
			<Container className={classes.containerApp}>
				<Sidebar onChange={handleChangeTheme} theme={theme} />
				<Main theme={theme} />
			</Container>
		</MuiThemeProvider>
	);
}

export default withStyles(styles)(Login);
