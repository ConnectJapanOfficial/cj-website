import type { IAboutUsContent } from "../../utilities/interface";

interface AboutUsOfficeContactProps {
  currentData: IAboutUsContent;
  googleMapsUrl: string;
}

const AboutUsOfficeContact = ({
  currentData,
  googleMapsUrl,
}: AboutUsOfficeContactProps) => {
  return (
    <section id="contact" className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {currentData.officeContactInfo.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            {currentData.officeContactInfo.details.map((detail, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {index === 0 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">
                    {detail.label}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="375"
                className="border-0"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                title="ConnectJapan Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOfficeContact;
