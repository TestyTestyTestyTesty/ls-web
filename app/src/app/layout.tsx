import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { nunitoSans, Theme, trueno } from "@styles"
import "@styles/globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
	title: "Livespace",
	description: "Livespace website",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" className={`${nunitoSans} ${trueno}`}>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<body>{children}</body>
			</ThemeProvider>
		</html>
	)
}
