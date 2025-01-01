"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, SparkleFx, SmartImage } from '@/src/once-ui/components';
import Link from 'next/link';
import {Header} from "@/src/once-ui/modules";

export default function Home() {
    const links = [
        {
            href: "https://get-employed.hashnode.dev/get-employed",
            title: "Get Employed",
            description: "A simple blog on software engineering jobs market.",
        },
        // {
        // 	href: "https://once-ui.com/docs/flexComponent",
        // 	title: "Blog 2",
        // 	description: "blog2 description",
        // },
        // {
        // 	href: "https://once-ui.com/docs/typography",
        // 	title: "Blog 3",
        // 	description: "blog3 description",
        // },
    ];

    return (
        <Flex
            fillWidth paddingTop="l" paddingX="l"
            direction="column" alignItems="center" flex={1}>

            <Header
                name="Get Employed"
                subline="StellaX Tech"
                avatar="/images/avatar.png" authenticated={false}
            />

            <Flex
                position="relative"
                as="section" overflow="hidden"
                fillWidth minHeight="0" maxWidth={68}
                direction="column" alignItems="center" flex={1}>
                <Flex
                    as="main"
                    direction="column" justifyContent="center"
                    fillWidth fillHeight padding="l" gap="l">
                    <Flex
                        mobileDirection="column"
                        fillWidth gap="24">
                        <Flex
                            position="relative"
                            flex={4} gap="24" marginBottom="104"
                            direction="column">
                            <Heading
                                wrap="balance"
                                variant="display-strong-s">
								<span className="font-code">
									<SparkleFx
                                        speed="medium"
                                        count={50}
                                        trigger
                                    >
                                        Scan the QR code to pay / subscribe.
                                    </SparkleFx>
								</span>
                            </Heading>
                            <SmartImage
                                src="/images/payment-qr.png"
                                alt="Payment QR code"
                                aspectRatio="1/1"
                                radius="l"
                                objectFit="cover"
                            />
                        </Flex>
                    </Flex>
                    <Grid
                        radius="l"
                        border="neutral-medium"
                        borderStyle="solid-1"
                        columns="repeat(3, 1fr)"
                        tabletColumns="1col"
                        mobileColumns="1col"
                        fillWidth>
                        {links.map((link) => (
                            <Link
                                target="_blank"
                                style={{ padding: 'var(--responsive-space-l)' }}
                                key={link.href}
                                href={link.href}>
                                <Flex
                                    fillWidth paddingY="8" gap="8"
                                    direction="column">
                                    <Flex
                                        fillWidth gap="12"
                                        alignItems="center">
                                        <Text
                                            variant="body-strong-m" onBackground="neutral-strong">
                                            {link.title}
                                        </Text>
                                        <Icon size="s" name="arrowUpRight" />
                                    </Flex>
                                    <Text
                                        variant="body-default-s" onBackground="neutral-weak">
                                        {link.description}
                                    </Text>
                                </Flex>
                            </Link>
                        ))}
                    </Grid>
                </Flex>
            </Flex>
            <Flex
                as="footer"
                position="relative"
                fillWidth paddingX="l" paddingY="m"
                justifyContent="space-between">
                <Text
                    variant="body-default-s" onBackground="neutral-weak">
                    © 2024 StellaX Technologies, <Link href="https://www.fsf.org/">GNU GENERAL PUBLIC LICENSE</Link>
                </Text>
                <Flex
                    gap="12">
                    <Button
                        href="https://github.com/Get-Employed/welcome-kit.git"
                        prefixIcon="github" size="s" variant="tertiary">
                        GitHub
                    </Button>
                    <Button
                        href="#"
                        prefixIcon="discord" size="s" variant="tertiary">
                        Discord
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
