import { AccordionDetails, AccordionSummary, Box, Link, styled, Typography } from "@mui/material"
import { breakpointsEnum } from "@lib"

export const MegaMenuMobileWrapper = styled(Box, {
	name: "MegaMenuMobileWrapper",
})({
	width: "100%",
})

export const MegaMenuMobileListsType1Wrapper = styled(Box, {
	name: "MegaMenuMobileListsType1Wrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	[theme.breakpoints.up(breakpointsEnum.MD)]: {
		flexDirection: "row",
		gap: "1.75rem",
	},
	"& > *:not(:last-child)": {
		paddingBottom: "3rem",
		position: "relative",
		borderBottom: `1px solid ${theme.palette.lsGrey.g400}`,
	},
}))

export const MegaMenuMobileListsWrapper = styled(Box, {
	name: "MegaMenuMobileListsWrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	marginBottom: "3rem",
	position: "relative",
	"&:after": {
		width: "100%",
		position: "absolute",
		bottom: "-2rem",
		height: "1px",
		backgroundColor: theme.palette.lsGrey.g400,
		content: "''",
	},
}))

export const MegaMenuMobileLinkWrapper = styled(Box, {
	name: "MegaMenuMobileLinkWrapper",
})({
	padding: "1.1rem 0",
})

export const MegaMenuMobileLink = styled(Link, {
	name: "MegaMenuMobileLink",
})(({ theme }) => ({
	color: theme.palette.defaultColors.black,
}))

export const MegaMenuMobileTypography = styled(Typography, {
	name: "MegaMenuMobileTypography",
})({
	textDecoration: "none",
})

export const MegaMenuMobileAccordionSummary = styled(AccordionSummary, {
	name: "MegaMenuMobileAccordionSummary",
})({
	"&.MuiAccordionSummary-root": {
		padding: "1.1rem 0",
	},
	"& .MuiAccordionSummary-content": {
		margin: "0",
	},
})

export const MegaMenuMobileAccordionDetails = styled(AccordionDetails, {
	name: "MegaMenuMobileAccordionDetails",
})({
	"&.MuiAccordionDetails-root": {
		padding: "0.5rem 0",
	},
})