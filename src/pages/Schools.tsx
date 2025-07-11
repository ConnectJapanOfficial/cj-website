import { useLoaderData, useNavigate } from "react-router";
import LoadMoreBtn from "../components/School/LoadMoreBtn";
import SchoolCTABtn from "../components/School/SchoolCTABtn";
import SchoolsHeader from "../components/School/SchoolsHeader";
import University from "../components/School/University";
import { usePageTitle } from "../utilities/hooks";
import type { ISchools, ISchoolUniversity } from "../utilities/interface";

const Schools = () => {
  const schoolsData: ISchools = useLoaderData() as ISchools;
  const navigate = useNavigate();

  usePageTitle("Schools");

  const displayedUniversities = schoolsData.universities.list.slice(0, 9);
  const blurredUniversities = schoolsData.universities.list.slice(9);
  const hasMoreUniversities = blurredUniversities.length > 0;

  const handleJoinProgram = () => {
    navigate("/service/university-application");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <SchoolsHeader schoolsData={schoolsData} />

        {/* Universities Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First 10 universities (full 3 rows + 1 from 4th row) */}
            {displayedUniversities.map((university: ISchoolUniversity) => (
              <University key={university.id} university={university} />
            ))}

            {/* Remaining universities with blur effect starting from middle of 4th row */}
            {hasMoreUniversities && (
              <div className="contents">
                <div className="relative col-span-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blur-sm opacity-60">
                    {blurredUniversities.map(
                      (university: ISchoolUniversity) => (
                        <University
                          key={university.id}
                          university={university}
                        />
                      )
                    )}
                  </div>

                  {/* Load More button overlay - positioned above Join component */}
                  <LoadMoreBtn />

                  {/* Overlay with CTA button starting from blur point */}
                  <SchoolCTABtn
                    title={schoolsData.cta.title}
                    description={schoolsData.cta.description}
                    buttonText={schoolsData.cta.buttonText}
                    onButtonClick={handleJoinProgram}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
