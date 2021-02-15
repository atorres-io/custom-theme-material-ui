import React, { useState } from 'react';
import {
	Grid,
	AppBar,
	Toolbar,
	Typography,
	Container,
	Button,
	CircularProgress,
	LinearProgress,
	InputBase,
	InputLabel,
	FormControl,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	NativeSelect,
	Paper,
	Card,
	CardMedia,
	CardContent,
} from '@material-ui/core';
import { fade, withStyles } from '@material-ui/core/styles';
import Codes from '../resources/codes';
import PlantsImage from '../assets/images/plants.jpg';

// Global Styles of Main Section
const styles = {
	wrapperMain: {
		width: 'calc(100% - 300px)',
		height: '100%',
		backgroundColor: 'transparent',
	},
	main: {
		width: '100%',
		maxWidth: '100%',
		height: 'auto',
		padding: '0',
		backgroundColor: 'var(--color-main)',
	},
	pulledApart: {
		width: '100%',
		padding: '24px',
		backgroundColor: 'transparent',
	},
	code: {
		width: '100%',
		height: '150px',
		overflow: 'auto',
		padding: '12px',
		direction: 'ltr',
		borderRadius: '6px',
		backgroundColor: 'var(--codetheme-canvas)',
		border: 'solid 1px var(--codetheme-border)',
		'-webkit-overflow-scrolling': 'touch',
		'& code': {
			backgroundColor: 'transparent',
			lineHeight: 1.5,
			width: '100%',
			height: '100%',
		},
		'& code p': {
			width: 'auto',
			height: 'auto',
		},
	},
	verticalSpacingMD: {
		margin: '20px 0',
	},
	customDialog: {
		'& .MuiDialog-paper': {
			borderRadius: '20px',
		},
	},
	customPaper: {
		padding: '20px',
		margin: '10px 0',
		borderRadius: '16px',
		backgroundColor: 'var(--color-boxes)',
	},
	customCard: {
		width: '250px',
		height: 'auto',
		borderRadius: '20px',
		backgroundColor: 'var(--color-card)',
		boxShadow: '0 12px 20px -10px var(--color-card-shadow)',
		border: 'solid 1px var(--color-card-border)',
		transition: 'box-shadow 250ms ease',
		'&:hover': {
			boxShadow: '0 15px 25px 0 var(--color-card-shadow)',
		},
		'& .MuiCardContent-root': {
			transform: 'translateY(-20px)',
			backgroundColor: 'var(--color-card)',
			borderRadius: '20px',
			color: 'var(--color-text-unfocus)',
		},
	},
	wrapperSticky: {
		position: 'sticky',
		top: '0',
		width: 'auto',
		height: 'auto',
		paddingTop: '20px',
	},
};

// Button Custom Styles
const CustomButton = withStyles({
	root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '8px 14px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: '#0063cc',
		borderColor: '#0063cc',
		borderRadius: '30rem',
		'&:hover': {
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
			borderColor: '#005cbf',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 50%)',
		},
	},
})(Button);

// Input Custom Styles
const CustomInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: 'var(--color-boxes)',
		border: '1px solid purple',
		fontSize: 16,
		width: 'auto',
		padding: '10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		'&:focus': {
			boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.main,
		},
	},
}))(InputBase);

// Select Custom Styles
const CustomSelect = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: 'var(--color-main)',
		border: '2px solid green',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
		},
	},
}))(InputBase);

// Slide Effect for Alert
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

function Main(props) {
	const { classes } = props;
	const [checked, setChecked] = useState(true);
	const [open, setOpen] = useState(false);
	const [names, setName] = React.useState('');

	const handleChange = event => {
		setChecked(event.target.checked);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSelectChange = event => {
		setName(event.target.value);
	};

	return (
		<Grid className={classes.wrapperMain}>
			<AppBar position='sticky'>
				<Toolbar>
					<Typography variant='h6' style={{ color: 'inherit' }}>
						Custom Material UI
					</Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>
				<Container
					className={classes.pulledApart}
					style={{ height: 'calc(215px + 24px)' }}
				>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: 'var(--color-text)' }}
					>
						Dark Mode
					</Typography>
					<pre className={classes.code}>
						<code>
							<p dangerouslySetInnerHTML={Codes.colorTheme()}></p>
						</code>
					</pre>
				</Container>
				<Container
					className={classes.pulledApart}
					style={{ height: 'calc(1191px + 24px)' }}
				>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: 'var(--color-text)' }}
					>
						Palette
					</Typography>
					<pre className={classes.code}>
						<code>
							<p dangerouslySetInnerHTML={Codes.palette()}></p>
						</code>
					</pre>
					<AppBar
						position='static'
						color='secondary'
						className={classes.verticalSpacingMD}
					>
						<Toolbar>
							<Typography variant='h6' style={{ color: 'inherit' }}>
								Secondary AppBar
							</Typography>
						</Toolbar>
					</AppBar>
					<Button variant='contained' color='primary' disableElevation>
						Primary
					</Button>
					<Button variant='contained' color='secondary' disableElevation>
						Secondary
					</Button>
					<Button variant='contained' disabled disableElevation>
						Disabled
					</Button>
					<br />
					<Button variant='outlined' color='primary'>
						Primary
					</Button>
					<Button variant='outlined' color='secondary'>
						Secondary
					</Button>
					<Button variant='outlined' disabled>
						Disabled
					</Button>
					<br />
					<Button color='primary'>Primary</Button>
					<Button color='secondary'>Secondary</Button>
					<Button disabled>Disabled</Button>
					<br />
					<CustomButton variant='contained' color='primary' disableRipple>
						Custom Button
					</CustomButton>
					<br />
					<CircularProgress style={{ margin: '0 5px' }} />
					<CircularProgress color='secondary' style={{ margin: '0 5px' }} />
					<br />
					<LinearProgress />
					<LinearProgress color='secondary' />
					<FormControl>
						<InputLabel shrink htmlFor='label'>
							Custom Input
						</InputLabel>
						<CustomInput aria-describedby='helpText' />
						<Typography
							id='helpText'
							variant='body2'
							gutterBottom
							style={{ color: 'var(--color-text)' }}
						>
							My help text.
						</Typography>
					</FormControl>
					<FormControl>
						<InputLabel htmlFor='labelSelect'>Names</InputLabel>
						<NativeSelect
							id='labelSelect'
							value={names}
							onChange={handleSelectChange}
							input={<CustomSelect />}
						>
							<option aria-label='None' value='' />
							<option value='María'>María</option>
							<option value='Rebeca'>Rebeca</option>
							<option value='Alejandro'>Alejandro</option>
						</NativeSelect>
					</FormControl>
					<br />
					<Checkbox
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'primario-checkbox' }}
					/>
					<Checkbox
						defaultChecked
						color='primary'
						inputProps={{ 'aria-label': 'secundario-checkbox' }}
					/>
					<Checkbox inputProps={{ 'aria-label': 'incontrolado-checkbox' }} />
					<Checkbox
						disabled
						inputProps={{ 'aria-label': 'disabled-checkbox' }}
					/>
					<Checkbox
						disabled
						checked
						inputProps={{ 'aria-label': 'disabled-checked-checkbox' }}
					/>
					<Checkbox
						defaultChecked
						indeterminate
						inputProps={{ 'aria-label': 'indeterminado-checkbox' }}
					/>
					<Checkbox
						defaultChecked
						color='default'
						inputProps={{ 'aria-label': 'checkbox-color-defecto' }}
					/>
					<Checkbox
						defaultChecked
						size='small'
						inputProps={{ 'aria-label': 'checkbox-tamano-pequeño' }}
					/>
					<Button
						variant='outlined'
						color='default'
						color='primary'
						onClick={handleClickOpen}
					>
						Dialog Alert!
					</Button>
					<Dialog
						className={classes.customDialog}
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='dialogTitle'
						aria-describedby='dialogDescription'
					>
						<DialogTitle id='dialogTitle'>Test Title</DialogTitle>
						<DialogContent>
							<DialogContentText id='dialogDescripcion'>
								Let Google help apps determine location. This means sending
								anonymous location data to Google, even when no apps are
								running.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color='primary'>
								Disagree
							</Button>
							<Button onClick={handleClose} color='secondary'>
								Agree
							</Button>
						</DialogActions>
					</Dialog>
					<br />
					<Paper className={classes.customPaper} elevation={12}>
						<Card className={classes.customCard} elevation={0}>
							<CardMedia
								component='img'
								alt='Plantas'
								height='140'
								image={PlantsImage}
								title='Plantas'
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ color: 'var(--color-text)' }}
								>
									Plants
								</Typography>
								<Typography variant='body2' component='p'>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</Card>
					</Paper>
				</Container>
				<Container className={classes.pulledApart} style={{ height: '650vh' }}>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: 'var(--color-text)' }}
					>
						Typography
					</Typography>
					<pre className={classes.code} style={{ marginBottom: '20px' }}>
						<code>
							<p dangerouslySetInnerHTML={Codes.palette()}></p>
						</code>
					</pre>
					<div className={classes.wrapperSticky}>
						<Typography variant='h1' gutterBottom>
							h1: this is a test title
						</Typography>
						<Typography variant='h2' gutterBottom>
							h2: this is a test title
						</Typography>
						<Typography variant='h3' gutterBottom>
							h3: this is a test title
						</Typography>
						<Typography variant='h4' gutterBottom>
							h4: this is a test title
						</Typography>
						<Typography variant='h5' gutterBottom>
							h5: this is a test title
						</Typography>
						<Typography variant='h6' gutterBottom>
							h6: this is a test title
						</Typography>
						<Typography variant='subtitle1' gutterBottom>
							subtitle 1: this is a test subtitle
						</Typography>
						<Typography variant='subtitle2' gutterBottom>
							subtitle 2: this is a test subtitle
						</Typography>
						<Typography variant='body1' gutterBottom>
							Body 1: Lorem Ipsum ldpundex codex report erb package readme litn chachekf nhode moduilrfes
							compontenesd obnekjxut utilities default. Texto de ejemplo Lorem Ipsum ldpundex
							codex report erb package readme litn chachekf nhode moduilrfes
							compontenesd obnekjxut utilities default.
						</Typography>
						<Typography variant='body2' gutterBottom>
							Body 2: Lorem Ipsum ldpundex codex report erb package readme litn chachekf nhode moduilrfes
							compontenesd obnekjxut utilities default. Texto de ejemplo Lorem Ipsum ldpundex
							codex report erb package readme litn chachekf nhode moduilrfes
							compontenesd obnekjxut utilities default.
						</Typography>
					</div>
				</Container>
			</Container>
		</Grid>
	);
}

export default withStyles(styles)(Main);
