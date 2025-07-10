import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { ILanguageProgramData } from "../../utilities/interface";

const JapaneseLanguageCourse = () => {
  const { language } = useContext(LanguageContext);
  const data = useLoaderData() as ILanguageProgramData;
  const [selectedBatch, setSelectedBatch] = useState<string>("batch1");

  usePageTitle("Japanese Language Course");

  const programData = data.languagePrograms[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            {programData.courseLevel}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-loose">
            {programData.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {programData.description}
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {programData.durationDetails}
          </p>

          {/* Price Badge */}
          <div className="inline-flex items-center bg-white shadow-lg rounded-2xl px-8 py-4 border border-gray-200 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-blue-600 mr-2">
                  {programData.fees.earlyBirdDiscount}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {programData.fees.courseFee}
                </span>
              </div>
              <span className="text-sm text-yellow-600 font-medium">
                {programData.fees.earlyBirdDeadline}
              </span>
            </div>
          </div>
        </div>

        {/* Course Overview Sections */}
        <div className="space-y-12">
          {/* Class Schedule */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">📅</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === "en"
                  ? "Class Schedule"
                  : language === "jp"
                  ? "授業スケジュール"
                  : "ক্লাসের সময়সূচি"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Batch 1 */}
              <div
                className={`bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedBatch === "batch1"
                    ? "border-blue-500 shadow-lg"
                    : "border-blue-100"
                }`}
                onClick={() => setSelectedBatch("batch1")}
              >
                <h3 className="font-semibold text-gray-800 mb-3">
                  {programData.classSchedule.batch1.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="bg-blue-100 px-3 py-1 rounded-full mr-2">
                      📅 {programData.classSchedule.batch1.days}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">
                      🕐 {programData.classSchedule.batch1.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Batch 2 */}
              <div
                className={`bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedBatch === "batch2"
                    ? "border-purple-500 shadow-lg"
                    : "border-purple-100"
                }`}
                onClick={() => setSelectedBatch("batch2")}
              >
                <h3 className="font-semibold text-gray-800 mb-3">
                  {programData.classSchedule.batch2.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-purple-600">
                    <span className="bg-purple-100 px-3 py-1 rounded-full mr-2">
                      📅 {programData.classSchedule.batch2.days}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-purple-600">
                    <span className="bg-purple-100 px-3 py-1 rounded-full">
                      🕐 {programData.classSchedule.batch2.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Language Club */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-3">
                  {programData.classSchedule.club.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-green-600">
                    <span className="bg-green-100 px-3 py-1 rounded-full mr-2">
                      📅 {programData.classSchedule.club.days}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <span className="bg-green-100 px-3 py-1 rounded-full">
                      🕐 {programData.classSchedule.club.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === "en"
                  ? "Learning Objectives"
                  : language === "jp"
                  ? "学習目標"
                  : "শিখনের উদ্দেশ্য"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Grammar"
                    : language === "jp"
                    ? "文法"
                    : "ব্যাকরণ"}
                </h3>
                <p className="text-sm text-gray-600">
                  {programData.learningObjectives.grammar}
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Vocabulary"
                    : language === "jp"
                    ? "語彙"
                    : "শব্দভাণ্ডার"}
                </h3>
                <p className="text-sm text-gray-600">
                  {programData.learningObjectives.vocabulary}
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Kanji"
                    : language === "jp"
                    ? "漢字"
                    : "কাঞ্জি"}
                </h3>
                <p className="text-sm text-gray-600">
                  {programData.learningObjectives.kanji}
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Skills"
                    : language === "jp"
                    ? "スキル"
                    : "দক্ষতা"}
                </h3>
                <p className="text-sm text-gray-600">
                  {programData.learningObjectives.skills}
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border border-red-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Culture"
                    : language === "jp"
                    ? "文化"
                    : "সংস্কৃতি"}
                </h3>
                <p className="text-sm text-gray-600">
                  {programData.learningObjectives.culture}
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === "en"
                  ? "Why Choose Us?"
                  : language === "jp"
                  ? "なぜ私たちを選ぶのか？"
                  : "কেন আমাদের বেছে নেবেন?"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programData.whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm mr-4 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">✅</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === "en"
                  ? "What's Included"
                  : language === "jp"
                  ? "含まれるもの"
                  : "যা অন্তর্ভুক্ত"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programData.whatsIncluded.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100"
                >
                  <div className="flex items-start">
                    <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center text-green-600 text-sm mr-4 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">📆</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === "en"
                  ? "Important Dates"
                  : language === "jp"
                  ? "重要な日程"
                  : "গুরুত্বপূর্ণ তারিখ"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Course Starts"
                    : language === "jp"
                    ? "コース開始"
                    : "কোর্স শুরু"}
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  {programData.importantDates.courseStarts}
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {language === "en"
                    ? "Discount Deadline"
                    : language === "jp"
                    ? "割引締切"
                    : "ছাড়ের শেষ তারিখ"}
                </h3>
                <p className="text-sm text-yellow-600 font-medium">
                  {programData.importantDates.discountDeadline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              {language === "en"
                ? "Ready to Start Your Japanese Journey?"
                : language === "jp"
                ? "日本語の旅を始める準備はできましたか？"
                : "আপনার জাপানি ভাষার যাত্রা শুরু করার জন্য প্রস্তুত?"}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {programData.fees.seatBooking}
            </p>
            <div className="flex justify-center">
              <Link to="/apply/language-course-form">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  {language === "en"
                    ? "Apply Now"
                    : language === "jp"
                    ? "今すぐ申し込む"
                    : "এখনই আবেদন করুন"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseLanguageCourse;
