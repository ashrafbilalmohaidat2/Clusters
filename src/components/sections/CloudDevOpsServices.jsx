// components/CloudDevOpsServices.js
// components/DevOpsPage.js
import React from "react";

const CloudDevOpsServices = () => {
  return (
    <div className="text-gray-800">
      {/* Banner / Header */}
      <section className="bg-blue-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Managed DevOps & DevSecOps
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          خدمات احترافية لتمكين تسليم برمجيات أسرع، أذكى وأكثر أمانًا reliability & security طوال الحياة التطويرية
        </p>
      </section>

      {/* Workflow / Process Steps */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">1. Plan & Design</h3>
            <p>
              تحديد متطلبات المشروع، مقاييس الأمان، تصميم البنية التحتية وخطة التنفيذ.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">2. Develop</h3>
            <p>
              تطوير الأكواد، تنفيذ أمن التطبيقات (SAST)، مراجعات الجودة، كتابة اختبارات مبكرة.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">3. Deploy</h3>
            <p>
              أتمتة النشر (Auto-release)، بنية تحتية قابلة للتوسع، إدارة الإصدارات، CI/CD.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">4. Test & Monitor</h3>
            <p>
              اختبارات وظيفية وغير وظيفية، اختبار الأمان (DAST)، المراقبة الفعلية وآداء النظام.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">ليش تختارنا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">تسليم أسرع</h3>
              <p>نقل التغييرات بسرعة من التطوير إلى الإنتاج مع تقليل وقت الانتظار.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">أمان مدمج</h3>
              <p>نضع الأمان في كل مرحلة، من التصميم إلى الاختبار والنشر.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">كفاءة وفعالية</h3>
              <p>تحسين التكاليف والموارد من خلال الأتمتة وتقليل الأخطاء البشرية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">خدماتنا</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-3">CI/CD Pipelines</h3>
              <p>
                تصميم وبناء خطوط دمج وتسليم مستمر، لأتمتة عملية البناء، اختبار الدمج، والنشر.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-3">Infrastructure as Code</h3>
              <p>
                إدارة البنيات التحتية باستخدام أدوات مثل Terraform, Ansible لضمان التناسق والتكرار.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-3">DevSecOps / أمان البرمجيات</h3>
              <p>
                دمج اختبارات الأمان (SAST, DAST), الفحص الثابت والديناميكي، وإدارة الثغرات الأمنية.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-3">Monitoring & Logging</h3>
              <p>
                مراقبة الأداء، السجلات، التنبيهات، واكتشاف الأخطاء والتعامل معها بسرعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-blue-700 text-white rounded-lg p-10">
          <h2 className="text-3xl font-semibold mb-4">جاهز تبدأ؟</h2>
          <p className="mb-6">خلينا نساعدك تنقل مشروعك للمستوى الأعلى مع DevOps و DevSecOps</p>
          <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200">
            تواصل معنا الآن
          </button>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsServices;

