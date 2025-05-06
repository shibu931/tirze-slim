'use client'
import { NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Link } from '@/i18n/navigation'
import { useEffect, useRef, useState } from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { RiArrowDownSLine, RiArrowUpSLine, RiMenu3Line, RiCloseLine, RiMenLine, RiMenuLine, RiMenu2Line } from "react-icons/ri"
import { websiteName } from "@/lib/constants/commonName"
import { navLinks } from "@/lib/constants/links"
import { LuSearch } from "react-icons/lu"
import Cart from "./Cart"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"
import Image from "next/image"

const Navbar = () => {
    const t = useTranslations('Form')
    const [isSticky, setIsSticky] = useState(false)
    const navbarRef = useRef(null)
    const pathname = usePathname()
    const locale = useLocale()
    const [searchBox, setSearchBox] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight
                const scrollPosition = window.scrollY
                setIsSticky(scrollPosition >= navbarHeight)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header ref={navbarRef} className={`py-1 mx-auto transition-all duration-300 w-full z-50 bg-white ${isSticky ? 'shadow-lg sticky top-0' : 'shadow-none'}`}>
            <div className="container mx-auto py-3 flex justify-between items-center px-4">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 order-2 md:order-1">
                    <Image
                        src="/assets/logo.png"
                        width={140}
                        height={60}
                        alt="Tirze-Slim"
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex mx-8 flex-1 justify-center md:order-2">
                    <NavMenu pathname={pathname} />
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4 order-3">
                    <Cart />
                    <LanguageSwitcher currentLg={locale} />
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden order-1 md:order-4">
                    <MobileNav pathname={pathname} />
                </div>

            </div>
        </header>
    )
}

const MobileNav = ({ pathname }) => {
    const [open, setOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const l = useTranslations('Links')
    const t = useTranslations('Common')

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="p-2 mt-1 hover:bg-gray-100 rounded-lg">
                <RiMenu2Line className="w-6 h-6 text-gray-700" />
            </SheetTrigger>

            <SheetContent side="left" className="w-full max-w-xs sm:max-w-md">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <SheetHeader className="border-b pb-4">
                        <SheetTitle className="text-xl font-bold text-rose-600">{websiteName}</SheetTitle>
                        <SheetDescription>{t('navigation')}</SheetDescription>
                    </SheetHeader>

                    {/* Navigation Items */}
                    <nav className="flex-1 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.label} className="space-y-1">
                                {link.subLinks ? (
                                    <>
                                        <button
                                            onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                                            className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                                        >
                                            <span className={pathname === link.slug ? "font-semibold text-rose-600" : ""}>
                                                {l(link.label)}
                                            </span>
                                            {activeSubmenu === link.label ? (
                                                <RiArrowUpSLine className="w-5 h-5" />
                                            ) : (
                                                <RiArrowDownSLine className="w-5 h-5" />
                                            )}
                                        </button>

                                        {activeSubmenu === link.label && (
                                            <div className="ml-6 space-y-1">
                                                {link.subLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.label}
                                                        href={subLink.slug}
                                                        onClick={() => setOpen(false)}
                                                        className={`block px-4 py-2 text-sm ${pathname === subLink.slug
                                                            ? "font-medium text-rose-600 bg-rose-50 rounded-lg"
                                                            : "text-gray-600 hover:bg-gray-50 rounded-lg"
                                                            }`}
                                                    >
                                                        {l(subLink.label)}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.slug}
                                        onClick={() => setOpen(false)}
                                        className={`block px-4 py-2 ${pathname === link.slug
                                            ? "font-semibold text-rose-600 bg-rose-50 rounded-lg"
                                            : "text-gray-700 hover:bg-gray-50 rounded-lg"
                                            }`}
                                    >
                                        {l(link.label)}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="border-t pt-4">
                        <SheetClose className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                            <RiCloseLine className="w-5 h-5" />
                            {t('close_menu')}
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

const NavMenu = ({ pathname }) => {
    const l = useTranslations('Links')
    const currentPath = pathname.replace(/\/en|\/it/, '')

    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-2">
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                        {link.subLinks ? (
                            <>
                                <NavigationMenuTrigger className={`text-gray-800 hover:text-rose-600 ${currentPath === link.slug ? 'text-rose-600' : ''}`}>
                                    {l(link.label)}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="p-2 bg-white border rounded-lg shadow-lg">
                                    <ul className="grid gap-1 w-[200px]">
                                        {link.subLinks.map((subLink) => (
                                            <li key={subLink.label}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={subLink.slug}
                                                        className={`px-4 py-2 block rounded-md hover:bg-rose-50 ${currentPath === subLink.slug ? 'bg-rose-50 text-rose-600' : 'text-gray-700'}`}
                                                    >
                                                        {l(subLink.label)}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link
                                    href={link.slug}
                                    className={`${navigationMenuTriggerStyle()} text-gray-800 hover:text-rose-600 ${currentPath === link.slug ? 'text-rose-600' : ''}`}
                                >
                                    {l(link.label)}
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar