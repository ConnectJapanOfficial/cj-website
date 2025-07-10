import { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { ILanguageProgramData } from "../../utilities/interface";
import PriceBadge from "./PriceBadge";
import ServiceCTA from "./ServiceCTA";
import ServiceHeader from "./ServiceHeader";
import ServiceInfoCard from "./ServiceInfoCard";
import ServiceSection from "./ServiceSection";

const JapaneseLanguageCourse = () => {
  const { language } = useContext(LanguageContext);
  const data = useLoaderData() as ILanguageProgramData;
  const [selectedBatch, setSelectedBatch] = useState<string>("batch1");

  usePageTitle("Japanese Language Course");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <ServiceHeader
          badge={data.courseOverview.courseLevel[language]}
          title={data.courseOverview.courseName[language]}
          description={data.howItWorks.description[language]}
          detailsText={data.courseOverview.durationDetails[language]}
          priceSection={
            <PriceBadge
              price={data.feesAndEnrollment.earlyBirdDiscount.amount[language]}
              originalPrice={data.feesAndEnrollment.courseFee.amount[language]}
              discountText={
                data.feesAndEnrollment.earlyBirdDiscount.validity[language]
              }
            />
          }
        />

        {/* Course Overview Sections */}
        <div className="space-y-12">
          {/* Class Schedule */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl mr-4 shadow-lg">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">
                    {data.classSchedule.title[language]}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {data.classSchedule.note[language]}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Batch 1 */}
              <div
                className={`group relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-100 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  selectedBatch === "batch1"
                    ? "border-blue-500 shadow-xl ring-2 ring-blue-200"
                    : "border-blue-200 hover:border-blue-300"
                }`}
                onClick={() => setSelectedBatch("batch1")}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-bl-3xl"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {data.classSchedule.batches.batch1.name[language]}
                    </h3>
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedBatch === "batch1"
                          ? "bg-blue-500 border-blue-500"
                          : "border-blue-300 group-hover:border-blue-400"
                      }`}
                    >
                      {selectedBatch === "batch1" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-100">
                      <div className="flex items-center text-blue-700">
                        <div className="bg-blue-500 p-2 rounded-lg mr-3">
                          <span className="text-white text-sm">📅</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                            Schedule
                          </p>
                          <p className="text-sm font-semibold text-gray-700">
                            {
                              data.classSchedule.batches.batch1.schedule[
                                language
                              ]
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Batch 2 */}
              <div
                className={`group relative overflow-hidden bg-gradient-to-br from-purple-50 via-purple-50 to-pink-100 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  selectedBatch === "batch2"
                    ? "border-purple-500 shadow-xl ring-2 ring-purple-200"
                    : "border-purple-200 hover:border-purple-300"
                }`}
                onClick={() => setSelectedBatch("batch2")}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-bl-3xl"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {data.classSchedule.batches.batch2.name[language]}
                    </h3>
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedBatch === "batch2"
                          ? "bg-purple-500 border-purple-500"
                          : "border-purple-300 group-hover:border-purple-400"
                      }`}
                    >
                      {selectedBatch === "batch2" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-100">
                      <div className="flex items-center text-purple-700">
                        <div className="bg-purple-500 p-2 rounded-lg mr-3">
                          <span className="text-white text-sm">📅</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-1">
                            Schedule
                          </p>
                          <p className="text-sm font-semibold text-gray-700">
                            {
                              data.classSchedule.batches.batch2.schedule[
                                language
                              ]
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language Club */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-3xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-bl-3xl"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {data.classSchedule.batches.languageClub.name[language]}
                    </h3>
                    <div className="bg-green-500 p-2 rounded-full">
                      <span className="text-white text-sm">🌸</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-green-100">
                      <div className="flex items-center text-green-700">
                        <div className="bg-green-500 p-2 rounded-lg mr-3">
                          <span className="text-white text-sm">📅</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">
                            Schedule
                          </p>
                          <p className="text-sm font-semibold text-gray-700">
                            {
                              data.classSchedule.batches.languageClub.schedule[
                                language
                              ]
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border border-green-200">
                      <div className="flex items-center text-green-700">
                        <div className="bg-emerald-500 p-2 rounded-lg mr-3">
                          <span className="text-white text-sm">✨</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">
                            Special
                          </p>
                          <p className="text-sm font-semibold text-gray-700">
                            {language === "en"
                              ? "Immersive Practice"
                              : language === "jp"
                              ? "実践的な練習"
                              : "নিমগ্ন অনুশীলন"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <ServiceSection
            icon="🎯"
            iconBgColor="bg-green-100"
            title={data.learningObjectives.title[language]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceInfoCard
                title={
                  data.learningObjectives.objectives.grammar.title[language]
                }
                description={
                  data.learningObjectives.objectives.grammar.description[
                    language
                  ]
                }
                bgGradient="bg-gradient-to-r from-blue-50 to-indigo-50"
                borderColor="border-blue-100"
              />
              <ServiceInfoCard
                title={
                  data.learningObjectives.objectives.vocabulary.title[language]
                }
                description={
                  data.learningObjectives.objectives.vocabulary.description[
                    language
                  ]
                }
                bgGradient="bg-gradient-to-r from-purple-50 to-pink-50"
                borderColor="border-purple-100"
              />
              <ServiceInfoCard
                title={data.learningObjectives.objectives.kanji.title[language]}
                description={
                  data.learningObjectives.objectives.kanji.description[language]
                }
                bgGradient="bg-gradient-to-r from-green-50 to-emerald-50"
                borderColor="border-green-100"
              />
              <ServiceInfoCard
                title={
                  data.learningObjectives.objectives.skills.title[language]
                }
                description={
                  data.learningObjectives.objectives.skills.description[
                    language
                  ]
                }
                bgGradient="bg-gradient-to-r from-yellow-50 to-orange-50"
                borderColor="border-yellow-100"
              />
              <ServiceInfoCard
                title={
                  data.learningObjectives.objectives.culture.title[language]
                }
                description={
                  data.learningObjectives.objectives.culture.description[
                    language
                  ]
                }
                bgGradient="bg-gradient-to-r from-red-50 to-pink-50"
                borderColor="border-red-100"
              />
            </div>
          </ServiceSection>

          {/* Japanese Language Club */}
          <ServiceSection
            icon="🌸"
            iconBgColor="bg-green-100"
            title={data.japaneseLanguageClub.title[language]}
            subtitle={data.japaneseLanguageClub.subtitle[language]}
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 mb-6">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {data.japaneseLanguageClub.description[language]}
              </p>

              <div className="bg-white p-4 rounded-xl border border-green-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-green-500 mr-2">🎯</span>
                  {language === "en"
                    ? "What We Do:"
                    : language === "jp"
                    ? "活動内容:"
                    : "আমরা যা করি:"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.japaneseLanguageClub.activities.map(
                    (activity, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-green-50 p-3 rounded-lg border border-green-100"
                      >
                        <span className="text-green-500 mr-3 text-lg flex-shrink-0">
                          •
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {activity[language]}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </ServiceSection>

          {/* How It Works */}
          <ServiceSection
            icon="🎓"
            iconBgColor="bg-indigo-100"
            title={data.howItWorks.title[language]}
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              {data.howItWorks.description[language]}
            </p>
          </ServiceSection>

          {/* Example Class Flow */}
          <ServiceSection
            icon="📚"
            iconBgColor="bg-orange-100"
            title={data.exampleClassFlow.title[language]}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                {data.exampleClassFlow.week[language]}
              </h3>
              <h4 className="text-lg font-medium text-orange-700 mb-3">
                {data.exampleClassFlow.sessionTitle[language]}
              </h4>
              <p className="text-gray-600 mb-4">
                <strong>Goal:</strong> {data.exampleClassFlow.goal[language]}
              </p>
              <div>
                <h5 className="font-medium text-gray-700 mb-3">
                  What Happens:
                </h5>
                <ul className="space-y-2">
                  {data.exampleClassFlow.activities.map((activity, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="text-orange-500 mr-3 text-lg">•</span>
                      <span>{activity[language]}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-white rounded-xl border border-orange-200">
                  <h6 className="font-medium text-gray-700 mb-2">Homework:</h6>
                  <p className="text-sm text-gray-600">
                    {data.exampleClassFlow.homework[language]}
                  </p>
                </div>
              </div>
            </div>
          </ServiceSection>

          {/* Why Choose Us */}
          <ServiceSection
            icon="⭐"
            iconBgColor="bg-purple-100"
            title={data.whyChooseUs.title[language]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whyChooseUs.features.map((reason, index) => (
                <ServiceInfoCard
                  key={index}
                  title=""
                  bgGradient="bg-gradient-to-r from-purple-50 to-pink-50"
                  borderColor="border-purple-100"
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm mr-4 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {reason[language]}
                    </p>
                  </div>
                </ServiceInfoCard>
              ))}
            </div>
          </ServiceSection>

          {/* What's Included */}
          <ServiceSection
            icon="✅"
            iconBgColor="bg-green-100"
            title={data.whatsIncluded.title[language]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whatsIncluded.includes.map((item, index) => (
                <ServiceInfoCard
                  key={index}
                  title=""
                  bgGradient="bg-gradient-to-r from-green-50 to-emerald-50"
                  borderColor="border-green-100"
                >
                  <div className="flex items-start">
                    <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center text-green-600 text-sm mr-4 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item[language]}
                    </p>
                  </div>
                </ServiceInfoCard>
              ))}
            </div>
          </ServiceSection>

          {/* Important Dates */}
          <ServiceSection
            icon="📆"
            iconBgColor="bg-yellow-100"
            title={data.feesAndEnrollment.importantDates.title[language]}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceInfoCard
                title={
                  data.feesAndEnrollment.importantDates.courseStart.title[
                    language
                  ]
                }
                bgGradient="bg-gradient-to-r from-blue-50 to-indigo-50"
                borderColor="border-blue-100"
              >
                <p className="text-sm text-blue-600 font-medium">
                  {
                    data.feesAndEnrollment.importantDates.courseStart.date[
                      language
                    ]
                  }
                </p>
              </ServiceInfoCard>
              <ServiceInfoCard
                title={
                  data.feesAndEnrollment.importantDates.discountDeadline.title[
                    language
                  ]
                }
                bgGradient="bg-gradient-to-r from-yellow-50 to-orange-50"
                borderColor="border-yellow-100"
              >
                <p className="text-sm text-yellow-600 font-medium">
                  {
                    data.feesAndEnrollment.importantDates.discountDeadline.date[
                      language
                    ]
                  }
                </p>
              </ServiceInfoCard>
            </div>
          </ServiceSection>
        </div>

        {/* CTA Section */}
        <ServiceCTA
          title={
            language === "en"
              ? "Ready to Start Your Japanese Journey?"
              : language === "jp"
              ? "日本語の旅を始める準備はできましたか？"
              : "আপনার জাপানি ভাষার যাত্রা শুরু করার জন্য প্রস্তুত?"
          }
          description={data.feesAndEnrollment.seatBooking.description[language]}
          primaryButton={{
            text:
              language === "en"
                ? "Apply Now"
                : language === "jp"
                ? "今すぐ申し込む"
                : "এখনই আবেদন করুন",
            link: "/apply/language-course-form",
          }}
        />
      </div>
    </div>
  );
};

export default JapaneseLanguageCourse;
