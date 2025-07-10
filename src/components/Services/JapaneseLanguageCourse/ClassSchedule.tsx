import { useState } from "react";
import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";

interface ClassScheduleProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const ClassSchedule = ({ data, language }: ClassScheduleProps) => {
  const [selectedBatch, setSelectedBatch] = useState<string>("batch1");

  return (
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
                      {data.classSchedule.batches.batch1.schedule[language]}
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
                      {data.classSchedule.batches.batch2.schedule[language]}
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
  );
};

export default ClassSchedule;
