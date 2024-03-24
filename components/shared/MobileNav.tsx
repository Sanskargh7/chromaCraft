"use client";
import {
	Sheet,
	SheetContent,
	SheetTrigger
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";


import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
	return (
		<header className="header">
			<Link href={'/'} className="flex items-center gap-2 md:py-2">
				<Image src={'/assets/images/logo-text.svg'} alt="logo" width={180} height={280} />
			</Link>
			<nav className="flex gap-2">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
					<Sheet>
						<SheetTrigger>
							<Image src={'/assets/icons/menu.svg'} alt="menu" height={32} width={32} className="cursor-pointer" />
						</SheetTrigger>
						<SheetContent className="sheet-content sm:w-64">
							<>
								<Image src={'/assets/images/logo-text.svg'} alt="logo" width={150} height={30} />
							</>
							<ul className="header_nav_elements">
								{
									navLinks.map((link) => {
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
						</SheetContent>
					</Sheet>

				</SignedIn>
			</nav>
		</header>
	)
}

export default MobileNav