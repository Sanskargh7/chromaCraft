"use client"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<div className="flex size-full flex-col gap-4">
				<Link href={'/'} className="sidebar-logo">
					<Image src={'/assets/images/logo-text.svg'} alt="logo" width={180} height={280} />
				</Link>
				<nav className="sidebar-nav">
					<SignedIn>
						<ul className="sidebar_nav_elements">
							{
								navLinks.slice(0, 6).map((link) => {
									const isActive = link.route === usePathname();
									return (
										<li key={link.route} className={`sidebar_nav_elements group ${isActive ? 'bg-yellow-200 text-black' : 'text-black-100'} hover:bg-yellow-100`
										} >
											<Link href={link.route} className="sidebar-link">
												<Image src={link.icon} width={24} height={24} alt="logo" className={`${isActive && 'brightness-200'}`} />
												{link.label}
											</Link>
										</li>
									)
								}

								)
							}
						</ul>
						<ul className="sidebar_nav_elements">
							{
								navLinks.slice(6).map((link) => {
									const isActive = link.route === usePathname();
									return (
										<li key={link.route} className={`sidebar_nav_elements group ${isActive ? 'bg-yellow-200 text-black' : 'text-black-100'} hover:bg-yellow-100`
										} >
											<Link href={link.route} className="sidebar-link">
												<Image src={link.icon} width={24} height={24} alt="logo" className={`${isActive && 'brightness-200'}`} />
												{link.label}
											</Link>
										</li>
									)
								}

								)
							}
							<li className="flex-center cursor-pointer gap-2 p-4">
								<UserButton afterSignOutUrl="/" showName />
							</li>
						</ul>
					</SignedIn>
					<SignedOut>
						<Button asChild >
							<Link href={'/sign-in'} className="button bg-yellow-200 bg-cover">Login</Link>
						</Button>
					</SignedOut>
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar