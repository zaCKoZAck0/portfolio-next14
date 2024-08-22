import { CopyableText } from "~/components/typography";

export function AboutMe() {
    return <section>
        <div>
            <table className="text-lg">
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Name:
                    </td>
                    <td className="font-semibold">
                        Ayush Kumar Yadav
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Age:
                    </td>
                    <td className="font-semibold">
                        22 Year(s) 3 Month(s) 12 Day(s)
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Nationality:
                    </td>
                    <td className="font-semibold">
                        Indian
                        🇮🇳
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Timezone:
                    </td>
                    <td className="font-semibold">
                        Asia/Kolkata (UTC+5:30)
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Languages:
                    </td>
                    <td className="font-semibold">
                        Hindi, English
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Email:
                    </td>
                    <td className="font-semibold">
                        <CopyableText>
                            id.ayushkryadav@gmail.com
                        </CopyableText>
                    </td>
                </tr>
                <tr>
                    <td className="text-muted-foreground pr-4">
                        Phone Number:
                    </td>
                    <td className="font-semibold">
                        <CopyableText>
                            +91 9198517250
                        </CopyableText>
                    </td>
                </tr>
            </table>
        </div>
    </section>
}