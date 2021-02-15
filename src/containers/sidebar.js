import React from 'react';
import {
	Grid,
	Container,
	AppBar,
	Toolbar,
	Typography,
	TextField,
	FormControl,
	MenuItem,
	InputLabel,
	Select,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';
import { CompactPicker } from 'react-color';
import withStyles from '@material-ui/core/styles/withStyles';

// Global Styles of Sidebar Section
const styles = () => ({
	simulationSidebar: {
		width: '300px',
		height: '100%',
		backgroundColor: 'transparent',
	},
	resetStyles: {
		backgroundColor: 'var(--color-sidebar)',
		borderBottom: 'solid 1px var(--color-border)',
	},
	sidebar: {
		width: '100%',
		height: 'auto',
		padding: '0',
		borderRight: 'solid 1px var(--color-border)',
		backgroundColor: 'var(--color-sidebar)',
	},
	pulledApart: {
		width: '100%',
		padding: '24px',
		backgroundColor: 'transparent',
	},
	customCheckbox: {
		width: 'auto',
		height: 'auto',
		'& label': {
			position: 'relative',
			display: 'flex',
			width: '70px',
			height: '35px',
			borderRadius: '30rem',
			overflow: 'hidden',
			cursor: 'pointer',
		},
		'& label:after': {
			position: 'absolute',
			top: '6px',
			left: '6px',
			content: `''`,
			width: '23px',
			height: '23px',
			backgroundColor: 'var(--color-sidebar)',
			borderRadius: '50%',
			transition: 'all 400ms cubic-bezier(0.25, 0.1, 0.25, 1.65)',
		},
		'& label:active::after': {
			width: '27px',
		},
	},
	fakeCheckbox: {
		width: '0',
		height: '0',
		visibility: 'hidden',
		'&:checked + label:after': {
			left: 'calc(100% - 6px)',
			transform: 'translateX(-100%)',
		},
	},
	fullWidth: {
		width: '100%',
	},
	verticalSpacingSM: {
		margin: '10px 0',
	},
	picker: {
		backgroundColor: 'var(--color-picker)',
		border: 'solid 1px var(--color-picker-border)',
		'& input': {
			color: 'var(--color-text) !important',
		},
	},
	input: {
		minWidth: '98%',
		margin: '10px 0',
	},
});

function Sidebar(props) {
	const { classes, theme } = props;

	const handleColorMode = event => {
		event.target.checked
			? document.documentElement.setAttribute('data-theme', 'dark')
			: document.documentElement.setAttribute('data-theme', 'light');
	};

	const handleChangePalette = (hex, level, type) => {
		props.onChange('palette', hex, [level, type]);
	};

	const handleChangeTypography = (value, level, type) => {
		props.onChange('typography', value, [level, type]);
	};

	const handleChangeCheck = (isChecked, level, type) => {
		isChecked
			? props.onChange('typography', 'italic', [level, type])
			: props.onChange('typography', 'normal', [level, type]);
	};

	return (
		<Grid className={classes.simulationSidebar}>
			<AppBar position='static' className={classes.resetStyles} elevation={0}>
				<Toolbar></Toolbar>
			</AppBar>
			<Container className={classes.sidebar}>
				<Container
					className={classes.pulledApart}
					style={{ height: 'calc(215px + 24px' }}
				>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: 'var(--color-text)' }}
					>
						Dark Mode
					</Typography>
					<div className={classes.customCheckbox}>
						<input
							id='switch'
							type='checkbox'
							data-indeterminate='false'
							className={classes.fakeCheckbox}
							onClick={handleColorMode}
						/>
						<label
							htmlFor='switch'
							style={{ backgroundColor: theme.palette.secondary.main }}
						></label>
					</div>
				</Container>
				<Container
					className={classes.pulledApart}
					style={{ height: 'calc(1191px + 24px' }}
				>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: 'var(--color-text)' }}
					>
						Palette
					</Typography>
					<Typography
						className={classes.fullWidth}
						variant='body1'
						style={{ margin: '15px 0', color: 'var(--color-text)' }}
					>
						Primary
					</Typography>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Main
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.primary.main}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'primary', 'main')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Light
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.primary.light}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'primary', 'light')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Dark
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.primary.dark}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'primary', 'dark')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Contrast Text
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.primary.contrastText}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'primary', 'contrastText')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body1'
						style={{ margin: '15px 0', color: 'var(--color-text)' }}
					>
						Secondary
					</Typography>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Main
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.secondary.main}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'secondary', 'main')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Light
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.secondary.light}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'secondary', 'light')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						Dark
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.secondary.dark}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'secondary', 'dark')
						}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						ContrastText
					</Typography>
					<CompactPicker
						className={classes.picker}
						color={theme.palette.contrastText}
						onChangeComplete={color =>
							handleChangePalette(color.hex, 'secondary', 'contrastText')
						}
					/>
				</Container>
				<Container className={classes.pulledApart} style={{ height: '650vh' }}>
					<Typography
						variant='h5'
						gutterBottom
						style={{ color: 'var(--color-text)' }}
					>
						Tipography
					</Typography>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						General
					</Typography>
					<TextField
						type='number'
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.fontSize}
						onBlur={event => {
							handleChangeTypography(
								Number.parseInt(event.target.value),
								'',
								'fontSize'
							);
						}}
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightLight'>Weight (Light)</InputLabel>
						<Select
							labelId='fontWeightLight'
							value={theme.typography.fontWeightLight}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'',
									'fontWeightLight'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightRegular'>Weight (Regular)</InputLabel>
						<Select
							labelId='fontWeightRegular'
							value={theme.typography.fontWeightRegular}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'',
									'fontWeightRegular'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightMedium'>Weight (Medium)</InputLabel>
						<Select
							labelId='fontWeightMedium'
							value={theme.typography.fontWeightMedium}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'',
									'fontWeightMedium'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightBold'>Weight (Bold)</InputLabel>
						<Select
							labelId='fontWeightBold'
							value={theme.typography.fontWeightBold}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'',
									'fontWeightBold'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						H1
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.h1.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h1', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.h1.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'h1', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'h1', 'fontStyle');
								}}
								name='checkH1'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformH1'>Transform</InputLabel>
						<Select
							labelId='textTransformH1'
							value={theme.typography.h1.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'h1',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightH1'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldH1'
							value={theme.typography.h1.fontWeight}
							onChange={event => {
								handleChangeTypography(event.target.value, 'h1', 'fontWeight');
							}}
						>
							<MenuItem value='300'>300</MenuItem>
							<MenuItem value='400'>400</MenuItem>
							<MenuItem value='500'>500</MenuItem>
							<MenuItem value='600'>600</MenuItem>
							<MenuItem value='700'>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h1.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h1', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h1.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h1', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h1.letterSpacing}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h1', 'letterSpacing');
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						H2
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.h2.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h2', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.h2.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'h2', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'h2', 'fontStyle');
								}}
								name='checkH2'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformH2'>Transform</InputLabel>
						<Select
							labelId='textTransformH2'
							value={theme.typography.h2.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'h2',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightH2'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldH2'
							value={theme.typography.h2.fontWeight}
							onChange={event => {
								handleChangeTypography(event.target.value, 'h2', 'fontWeight');
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h2.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h2', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h2.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h2', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h2.letterSpacing}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h2', 'letterSpacing');
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						H3
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.h3.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h3', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.h3.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'h3', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'h3', 'fontStyle');
								}}
								name='checkH3'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformH3'>Transform</InputLabel>
						<Select
							labelId='textTransformH3'
							value={theme.typography.h3.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'h3',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightH3'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldH3'
							value={theme.typography.h3.fontWeight}
							onChange={event => {
								handleChangeTypography(event.target.value, 'h3', 'fontWeight');
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h3.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h3', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h3.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h3', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h3.letterSpacing}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h3', 'letterSpacing');
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						H4
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.h4.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h4', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.h4.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'h4', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'h4', 'fontStyle');
								}}
								name='checkH4'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformH4'>Transform</InputLabel>
						<Select
							labelId='textTransformH4'
							value={theme.typography.h4.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'h4',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightH4'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldH4'
							value={theme.typography.h4.fontWeight}
							onChange={event => {
								handleChangeTypography(event.target.value, 'h4', 'fontWeight');
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h4.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h4', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h4.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h4', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h4.letterSpacing}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h4', 'letterSpacing');
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						H5
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.h5.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h5', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.h5.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'h5', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'h5', 'fontStyle');
								}}
								name='checkH5'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformH5'>Transform</InputLabel>
						<Select
							labelId='textTransformH5'
							value={theme.typography.h5.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'h5',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightH5'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldH5'
							value={theme.typography.h5.fontWeight}
							onChange={event => {
								handleChangeTypography(event.target.value, 'h5', 'fontWeight');
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h5.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h5', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h5.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h5', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h5.letterSpacing}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h5', 'letterSpacing');
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						H6
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.h6.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h6', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.h6.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'h6', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'h6', 'fontStyle');
								}}
								name='checkH6'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformH6'>Transform</InputLabel>
						<Select
							labelId='textTransformH6'
							value={theme.typography.h6.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'h6',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightH6'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldH6'
							value={theme.typography.h6.fontWeight}
							onChange={event => {
								handleChangeTypography(event.target.value, 'h6', 'fontWeight');
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h6.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h6', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h6.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h6', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.h6.letterSpacing}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'h6', 'letterSpacing');
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						SUBTITLE 1
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.subtitle1.fontFamily}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle1',
								'fontFamily'
							);
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.subtitle1.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'subtitle1', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(
										event.target.checked,
										'subtitle1',
										'fontStyle'
									);
								}}
								name='checkSubtitle1'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformSubtitle1'>Transform</InputLabel>
						<Select
							labelId='textTransformSubtitle1'
							value={theme.typography.subtitle1.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'subtitle1',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightSubtitle1'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldSubtitle1'
							value={theme.typography.subtitle1.fontWeight}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'subtitle1',
									'fontWeight'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.subtitle1.fontSize}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle1',
								'fontSize'
							);
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.subtitle1.lineHeight}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle1',
								'lineHeight'
							);
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.subtitle1.letterSpacing}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle1',
								'letterSpacing'
							);
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						SUBTITLE 2
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.subtitle2.fontFamily}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle2',
								'fontFamily'
							);
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.subtitle2.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'subtitle2', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(
										event.target.checked,
										'subtitle2',
										'fontStyle'
									);
								}}
								name='checkSubtitle2'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformSubtitle2'>Transform</InputLabel>
						<Select
							labelId='textTransformSubtitle2'
							value={theme.typography.subtitle2.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'subtitle2',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightSubtitle2'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldSubtitle2'
							value={theme.typography.subtitle2.fontWeight}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'subtitle2',
									'fontWeight'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.subtitle2.fontSize}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle2',
								'fontSize'
							);
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.subtitle2.lineHeight}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle2',
								'lineHeight'
							);
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.subtitle2.letterSpacing}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'subtitle2',
								'letterSpacing'
							);
						}}
					/>

					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						BODY 1
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.body1.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'body1', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.body1.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'body1', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'body1', 'fontStyle');
								}}
								name='checkBody1'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformBody1'>Transform</InputLabel>
						<Select
							labelId='textTransformBody1'
							value={theme.typography.body1.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'body1',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightBody1'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldBody1'
							value={theme.typography.body1.fontWeight}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'body1',
									'fontWeight'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.body1.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'body1', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.body1.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'body1', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.body1.letterSpacing}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'body1',
								'letterSpacing'
							);
						}}
					/>
					<Typography
						className={classes.fullWidth}
						variant='body2'
						style={{
							margin: '10px 0',
							color: 'var(--color-text)',
							fontStyle: 'italic',
						}}
					>
						BODY 2
					</Typography>
					<TextField
						label='Font'
						size='small'
						variant='outlined'
						className={classes.input}
						style={{ margin: '10px 0 20px 0' }}
						defaultValue={theme.typography.body2.fontFamily}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'body2', 'fontFamily');
						}}
					/>
					<CompactPicker
						className={classes.picker}
						color={theme.typography.body2.color}
						onChangeComplete={color =>
							handleChangeTypography(color.hex, 'body2', 'color')
						}
					/>
					<FormControlLabel
						style={{ margin: '20px 0 10px 0' }}
						control={
							<Checkbox
								onChange={event => {
									handleChangeCheck(event.target.checked, 'body2', 'fontStyle');
								}}
								name='checkBody2'
								color='primary'
							/>
						}
						label='Italic'
					/>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='textTransformBody2'>Transform</InputLabel>
						<Select
							labelId='textTransformBody2'
							value={theme.typography.body2.textTransform}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'body2',
									'textTransform'
								);
							}}
						>
							<MenuItem value='none'>Ninguno</MenuItem>
							<MenuItem value='uppercase'>Mayúsculas</MenuItem>
							<MenuItem value='lowercase'>Minúsculas</MenuItem>
							<MenuItem value='capitalize'>Capital</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						variant='outlined'
						className={classes.input}
						size='small'
					>
						<InputLabel id='fontWeightBody2'>Weight</InputLabel>
						<Select
							labelId='fontWeightBoldBody2'
							value={theme.typography.body2.fontWeight}
							onChange={event => {
								handleChangeTypography(
									event.target.value,
									'body2',
									'fontWeight'
								);
							}}
						>
							<MenuItem value={300}>300</MenuItem>
							<MenuItem value={400}>400</MenuItem>
							<MenuItem value={500}>500</MenuItem>
							<MenuItem value={600}>600</MenuItem>
							<MenuItem value={700}>700</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label='Size'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.body2.fontSize}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'body2', 'fontSize');
						}}
					/>
					<TextField
						label='Line Height'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.body2.lineHeight}
						onBlur={event => {
							handleChangeTypography(event.target.value, 'body2', 'lineHeight');
						}}
					/>
					<TextField
						label='Letter Spacing'
						size='small'
						variant='outlined'
						className={classes.input}
						defaultValue={theme.typography.body2.letterSpacing}
						onBlur={event => {
							handleChangeTypography(
								event.target.value,
								'body2',
								'letterSpacing'
							);
						}}
					/>
				</Container>
			</Container>
		</Grid>
	);
}

export default withStyles(styles)(Sidebar);
