import { ChevronDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { RecommendationCard } from "~/components/recommendation-card";
import { H2, P, H3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import recommendationsData from "../../../../data/recommendations.json";

export function Recommendations() {
  return (
    <div className="md:min-h-screen md:flex flex-col items-center justify-center md:pt-0 pt-20">
      <H2 className="w-full text-center">Recommendations</H2>
      <div>
        <div>
          <P className="text-sm text-center">
            {
              "Here are some of the recommendations I've received from my colleagues and peers. I'm grateful for their kind words and support."
            }
          </P>
        </div>
        <div className="w-full flex justify-center mb-2 mt-4">
          <a
            href="https://www.linkedin.com/in/ayush-kumar-yadav/edit/forms/recommendation/write/?profileFormEntryPoint=PROFILE_SECTION&profileUrn=urn%3Ali%3Afsd_profile%3AACoAAC_FOPQBNboYueAWvsHwP66NJxIybljtgys"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" size="lg">
              <FaLinkedin className="mr-2" size={20} />
              <H3 className="text-lg">Add Recommendation</H3>
            </Button>
          </a>
        </div>
        {recommendationsData.recommendations.map((recommendation, index) => {
          if (recommendation.isPinned) {
            return <RecommendationCard key={index} {...recommendation} />;
          } else return null;
        })}
      </div>
      <div className="mb-2 flex justify-center">
        <a
          href="https://www.linkedin.com/in/ayush-kumar-yadav/#recommendations"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost" size="sm" className="rounded-full">
            View All Recommendations
            <ChevronDown size={20} className="ml-2" />
          </Button>
        </a>
      </div>
    </div>
  );
}
