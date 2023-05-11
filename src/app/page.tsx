import { Inter } from "next/font/google";
import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";

export const metadata: Metadata = {
	title: "Next13 fullstack API | Home",
	description: "Free & open-source text similarity API",
};

export default function Home() {
	return (
		<div className="relative h-screen flex items-center justify-center overlfow-x-hidden">
			<div className="container pt-32 max-w-7xl mx-auto w-full h-full">
				<div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
					<LargeHeading size="lg" className="three-d text-black dark:text-light-gold">
						Easily determine <br /> text similarity.
					</LargeHeading>
				</div>
			</div>
		</div>
	);
}
