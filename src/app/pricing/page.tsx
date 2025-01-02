"use client";

import React from 'react';

import {
    Heading,
    Text,
    Flex,
    Button,
    Grid,
    Icon,
    InlineCode,
    LetterFx,
    Arrow, AvatarGroup, Badge, Accordion,
} from '@/once-ui/components';
import Link from 'next/link';
import {Header} from "@/once-ui/modules";

export default function Home() {
    const links = [
        {
            href: "https://get-employed.hashnode.dev/get-employed",
            title: "Get Employed",
            description: "Understand the job market",
        },
        {
            href: "#",
            title: "How to get started with Programming",
            description: "Learn the basics of programming",
        },
        {
            href: "#",
            title: "Setting up your development environment",
            description: "Fake it until you make it!!",
        },
    ];

    return (
        <Flex
            fillWidth paddingTop="l" paddingX="l"
            direction="column" alignItems="center" flex={1}>
            <Header
                name="Scott"
                subline="Infinite Inc."
                avatar="/images/demos/avatar_01.png" authenticated={false}			/>
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
									<LetterFx
                                        trigger="instant">
										Check out the pricing plans
									</LetterFx>
								</span>
                            </Heading>
                            <AvatarGroup
                                avatars={[
                                    {
                                        src: '/images/students/avatar_01.webp'
                                    },
                                    {
                                        src: '/images/students/avatar_02.webp'
                                    },
                                    {
                                        src: '/images/students/avatar_03.webp'
                                    }
                                ]}
                                size="m"
                            />
                            <Button
                                id="readDocs"
                                href="https://github.com/Get-Employed/welcome-kit.git"
                                variant="secondary">
                                <Flex alignItems="center">
                                    Enroll along with other students
                                    <Arrow trigger="#readDocs"/>
                                </Flex>
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex
                        border="neutral-weak"
                        borderStyle="solid-1"
                        gap="24"
                        padding="24"
                        onBackground="brand-strong"
                        background="neutral-weak"
                    >
                        <Text>
                            <Accordion
                                title="Basic"
                            >
                                <Text
                                    variant="body-default-s"
                                    onBackground="neutral-weak"
                                >
                                    This is the content of the accordion.
                                </Text>
                            </Accordion>
                        </Text>
                        <Text>
                            <Accordion
                                title="Intermediate"
                            >
                                <Text
                                    variant="body-default-s"
                                    onBackground="neutral-weak"
                                >
                                    This is the content of the accordion.
                                </Text>
                            </Accordion>
                        </Text>
                        <Text>
                            <Accordion
                                title="Advanced"
                            >
                                <Text
                                    variant="body-default-s"
                                    onBackground="neutral-weak"
                                >
                                    This is the content of the accordion.
                                </Text>
                            </Accordion>
                        </Text>
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
                    © 2025 StellaX Technologies, <Link href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU License</Link>
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