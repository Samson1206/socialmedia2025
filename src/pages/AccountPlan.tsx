import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { platforms } from '../data/platforms';

const industryOptions = [
  '跨境电商', '制造业', '消费品', '科技', '教育', '医疗', '服务业', '其他'
];
const tradeModes = ['B2B', 'B2C'];
const contentTypes = [
  { label: '文字', options: ['营销文案', '节日促销文案', '节日祝福', '技术分析', '行业趋势', '解决方案'] },
  { label: '图片', options: ['产品图', '场景图', '企业工厂', '生产加工', '客户反馈', '成功案例'] },
  { label: '视频', options: ['产品视频', '使用教程', '生产加工过程', '产品讲解', '场景应用', '产品对比', '企业宣传', '企业实力', '公司文化'] },
  { label: '直播', options: ['产品展示', '售卖', '公司介绍'] },
];
const targetOptions = [
  '粉丝数达到', '曝光量达到', '转化率提升', '品牌知名度提升', '零售', '批发', '获客', '其他'
];

type ContentType = {
  [key: string]: string[];
};

type AccountPlanForm = {
  industry: string;
  customIndustry: string;
  product: string;
  tradeModes: string[];
  customerProfile: string;
  region: string;
  industryFeature: string;
  consumption: string;
  content: ContentType;
  platforms: string[];
  targets: string[];
  customTarget: string;
  brandPlan: string;
};

export default function AccountPlan() {
  const [form, setForm] = useState<AccountPlanForm>({
    industry: '',
    customIndustry: '',
    product: '',
    tradeModes: [],
    customerProfile: '',
    region: '',
    industryFeature: '',
    consumption: '',
    content: {},
    platforms: [],
    targets: [],
    customTarget: '',
    brandPlan: ''
  });
  const [pdfLoading, setPdfLoading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleChange = (field: keyof AccountPlanForm, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };
  const handleCheckbox = (field: keyof AccountPlanForm, value: string) => {
    setForm(prev => {
      const arr = (prev[field] as string[]) || [];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]
      };
    });
  };
  const handleContentCheckbox = (type: string, value: string) => {
    setForm(prev => {
      const content = { ...prev.content };
      content[type] = content[type] || [];
      content[type] = content[type].includes(value)
        ? content[type].filter((v: string) => v !== value)
        : [...content[type], value];
      return { ...prev, content };
    });
  };

  const handleExportPDF = async () => {
    setPdfLoading(true);
    
    try {
      // 临时显示PDF预览区域
      if (pdfRef.current) {
        pdfRef.current.style.display = 'block';
        
        // 等待DOM更新
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // 使用html2canvas将内容转换为图片
        const canvas = await html2canvas(pdfRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 800,
          height: pdfRef.current.scrollHeight
        });
        
        // 隐藏预览区域
        pdfRef.current.style.display = 'none';
        
        // 创建PDF
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        
        pdf.save('社媒账号规划.pdf');
      }
    } catch (error) {
      console.error('PDF生成失败:', error);
      alert('PDF生成失败，请重试');
      
      // 确保预览区域被隐藏
      if (pdfRef.current) {
        pdfRef.current.style.display = 'none';
      }
    }
    
    setPdfLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">社媒账号规划</h1>
      
      {/* PDF预览区域 - 隐藏状态 */}
      <div ref={pdfRef} className="bg-white p-8 rounded-lg shadow-lg mb-6" style={{ display: 'none', width: '800px', margin: '0 auto' }}>
        <h2 className="text-2xl font-bold mb-6 text-center">社媒账号规划</h2>
        <div className="space-y-4 text-sm">
          <div><strong>行业:</strong> {form.industry === '其他' ? form.customIndustry : form.industry}</div>
          <div><strong>产品:</strong> {form.product}</div>
          <div><strong>贸易模式:</strong> {(form.tradeModes || []).join('、')}</div>
          <div><strong>客户画像:</strong> {form.customerProfile}</div>
          <div><strong>区域/国家:</strong> {form.region}</div>
          <div><strong>行业特点:</strong> {form.industryFeature}</div>
          <div><strong>消费习惯:</strong> {form.consumption}</div>
          <div><strong>内容类型:</strong></div>
          {Object.entries(form.content).map(([type, arr]) => (
            <div key={type} className="ml-4">
              <strong>{type}:</strong> {(arr as string[]).join('、')}
            </div>
          ))}
          <div><strong>平台选择:</strong> {(form.platforms || []).join('、')}</div>
          <div><strong>目标:</strong> {(form.targets || []).join('、')} {form.customTarget}</div>
          <div><strong>品牌定位与内容规划:</strong></div>
          <div className="ml-4 whitespace-pre-wrap">{form.brandPlan}</div>
        </div>
      </div>
      
      <form className="space-y-6">
        {/* 行业选择 */}
        <div>
          <label className="block font-medium mb-1">行业</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {industryOptions.map(opt => (
              <label key={opt} className="flex items-center gap-1">
                <input type="radio" name="industry" value={opt} checked={form.industry === opt} onChange={e => handleChange('industry', e.target.value)} />
                {opt}
              </label>
            ))}
            <label className="flex items-center gap-1">
              <input type="radio" name="industry" value="其他" checked={form.industry === '其他'} onChange={e => handleChange('industry', e.target.value)} />
              其他
            </label>
            {form.industry === '其他' && (
              <input className="border rounded px-2 py-1 ml-2" placeholder="请填写行业" value={form.customIndustry} onChange={e => handleChange('customIndustry', e.target.value)} />
            )}
          </div>
        </div>
        {/* 产品 */}
        <div>
          <label className="block font-medium mb-1">具体产品</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="请输入产品" value={form.product} onChange={e => handleChange('product', e.target.value)} />
        </div>
        {/* 贸易模式 */}
        <div>
          <label className="block font-medium mb-1">贸易模式</label>
          <div className="flex gap-4">
            {tradeModes.map(opt => (
              <label key={opt} className="flex items-center gap-1">
                <input type="checkbox" checked={form.tradeModes.includes(opt)} onChange={() => handleCheckbox('tradeModes', opt)} />
                {opt}
              </label>
            ))}
          </div>
        </div>
        {/* 客户画像 */}
        <div>
          <label className="block font-medium mb-1">客户画像（如年龄、性别、职业、收入等）</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="如：25-40岁，女性为主，白领，年收入10-30万" value={form.customerProfile} onChange={e => handleChange('customerProfile', e.target.value)} />
        </div>
        {/* 区域/国家 */}
        <div>
          <label className="block font-medium mb-1">区域/国家</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="如：美国、东南亚、全球" value={form.region} onChange={e => handleChange('region', e.target.value)} />
        </div>
        {/* 行业特点 */}
        <div>
          <label className="block font-medium mb-1">行业特点补充</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="如：季节性强、标准化高、定制化多" value={form.industryFeature} onChange={e => handleChange('industryFeature', e.target.value)} />
        </div>
        {/* 消费习惯 */}
        <div>
          <label className="block font-medium mb-1">消费习惯</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="如：注重性价比、追求品牌、重视售后" value={form.consumption} onChange={e => handleChange('consumption', e.target.value)} />
        </div>
        {/* 内容类型 */}
        <div>
          <label className="block font-medium mb-1">内容类型（可多选）</label>
          <div className="space-y-2">
            {contentTypes.map(type => (
              <div key={type.label}>
                <div className="font-semibold mb-1">{type.label}</div>
                <div className="flex flex-wrap gap-2">
                  {type.options.map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="checkbox" checked={form.content[type.label]?.includes(opt)} onChange={() => handleContentCheckbox(type.label, opt)} />
                      {opt}
                    </label>
                  ))}
                  <input className="border rounded px-2 py-1" placeholder={`自定义${type.label}内容`} onBlur={e => {
                    if (e.target.value) handleContentCheckbox(type.label, e.target.value); e.target.value = '';
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 平台选择 */}
        <div>
          <label className="block font-medium mb-1">主要平台选择（可多选）</label>
          <div className="flex flex-wrap gap-2">
            {platforms.map(p => (
              <label key={p.id} className="flex items-center gap-1">
                <input type="checkbox" checked={form.platforms.includes(p.name)} onChange={() => handleCheckbox('platforms', p.name)} />
                {p.name}
              </label>
            ))}
          </div>
        </div>
        {/* 目标设定 */}
        <div>
          <label className="block font-medium mb-1">目标设定</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {targetOptions.map(opt => (
              <label key={opt} className="flex items-center gap-1">
                <input type="checkbox" checked={form.targets.includes(opt)} onChange={() => handleCheckbox('targets', opt)} />
                {opt}
              </label>
            ))}
            <input className="border rounded px-2 py-1" placeholder="自定义目标" value={form.customTarget} onChange={e => handleChange('customTarget', e.target.value)} />
          </div>
        </div>
        {/* 品牌定位与内容规划 */}
        <div>
          <label className="block font-medium mb-1">品牌定位与内容规划</label>
          <textarea className="border rounded px-3 py-2 w-full min-h-[80px]" placeholder="请描述账号的品牌定位、内容风格、运营重点等" value={form.brandPlan} onChange={e => handleChange('brandPlan', e.target.value)} />
        </div>
        {/* 导出PDF按钮 */}
        <div>
          <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" onClick={handleExportPDF} disabled={pdfLoading}>
            {pdfLoading ? '正在生成PDF...' : '导出账号规划PDF'}
          </button>
        </div>
      </form>
    </div>
  );
} 