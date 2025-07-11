import type { IAboutUsContent } from "../../utilities/interface";

interface AboutUsGetInTouchProps {
  currentData: IAboutUsContent;
  contactEmail: string;
  subject: string;
  emailBody: string;
}

const AboutUsGetInTouch = ({
  currentData,
  contactEmail,
  subject,
  emailBody,
}: AboutUsGetInTouchProps) => {
  return (
    <section id="get-in-touch" className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {currentData.getInTouch.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {currentData.getInTouch.forStudents.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {currentData.getInTouch.forStudents.subtitle}
            </p>
            <div className="space-y-3">
              {currentData.getInTouch.forStudents.options.map(
                (option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-green-200 hover:bg-green-50 transition-colors duration-300"
                  >
                    <span className="text-green-600">📱</span>
                    <span className="text-gray-700">{option}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* For Institutions */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {currentData.getInTouch.forInstitutions.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {currentData.getInTouch.forInstitutions.description}
            </p>
            <a
              href={`mailto:${contactEmail}?subject=${subject}&body=${emailBody}`}
              className="mt-4 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 w-full inline-block text-center"
            >
              Send Partnership Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsGetInTouch;
