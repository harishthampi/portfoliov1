import { About } from "./About";
import { Hero } from "./Hero";
import { Hero_ } from "./Hero_";

export function Hero_About() {
    return (
        <div className="flex">
            <About />
            <Hero_ />
        </div>
    )
}