import { MoonIcon, SunMedium, SunriseIcon, SunsetIcon } from "lucide-react";
import { CopyableText } from "~/components/typography";
import { getRelativeDate } from "~/lib/date";
import { Greet } from "./greet";

export function AboutMe() {
    const time = new Date().toLocaleTimeString("en-In",{
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
    const hour = Number(time.split(":")[0]);
    const am = time.split(" ")[1];
    const Time = () => {
        if (am === "am") {
            if(hour >= 5 && hour < 12) {
                return {
                    icon: ()=><SunriseIcon className="md:size-5 size-4" />,
                    time: "Morning"
                };
            } else {
                return {
                    icon: ()=><MoonIcon className="md:size-5 size-4" />,
                    time: "Night"
                };
            }
        } else {
            if (hour >= 12 && hour < 5) {
                return {
                    icon: ()=><SunMedium className="md:size-5 size-4" />,
                    time: "Afternoon"
                };
            } else if (hour >= 5 && hour < 7) {
                return {
                    icon: ()=><SunsetIcon className="md:size-5 size-4" />,
                    time: "Evening"
                };
            } else {
                return {
                    icon: ()=><MoonIcon className="md:size-5 size-4" />,
                    time: "Night"
                };
            }
        }
    }


    const Icon = Time();
    return <section>
        <div>
            <table className="md:text-lg text-xs">
                <tbody>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Name:
                    </td>
                    <td className="font-semibold">
                        Ayush Kumar Yadav
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Age:
                    </td>
                    <td className="font-semibold">
                        {getRelativeDate(new Date("2001-11-30"))}
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Nationality:
                    </td>
                    <td className="font-semibold">
                        Indian
                        🇮🇳
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Timezone:
                    </td>
                    <td className="font-semibold flex items-center gap-2">
                        Asia/Kolkata (UTC+5:30) - {time}
                        <Greet icon={Icon.icon()} time={Icon.time} />
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Languages:
                    </td>
                    <td className="font-semibold">
                        Hindi, English
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Email:
                    </td>
                    <td className="font-semibold">
                        <CopyableText>
                            id.ayushkryadav@gmail.com
                        </CopyableText>
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground md:pr-4">
                        Phone Number:
                    </td>
                    <td className="font-semibold">
                        <CopyableText>
                            +91 9198517250
                        </CopyableText>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
}