'use client';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import React, { useState } from 'react';

// import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem} from '../ui/navbar-menu';

import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Skills"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Experience"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/tferdous17" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/tferdous17/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                    </div>
                </MenuItem>
                {/* <ModeToggle /> */}
            </Menu>
        </div>
    );
}