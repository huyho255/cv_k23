/**
 * Tool tự động tổng hợp ngân hàng trắc nghiệm từ Markdown sang file JS cho web.
 * Cách chạy:
 *   node tools/generate_questions.js
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const inputDir = path.join(root, 'ngan hang trac nghiem');

function clean(text) {
  return (text || '')
    .replace(/\r/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

function processFolder() {
  if (!fs.existsSync(inputDir)) {
    console.log(`Thư mục "${inputDir}" chưa tồn tại.`);
    return;
  }

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md');
  if (files.length === 0) {
    console.log(`Chưa có file câu hỏi markdown (.md) nào trong "${inputDir}".`);
    return;
  }

  console.log(`Tìm thấy ${files.length} file markdown: ${files.join(', ')}`);

  let combinedMarkdown = `# Ngân hàng câu hỏi Thị Giác Máy Tính (Tổng hợp)\n\n`;
  let questionCounter = 1;

  for (const file of files) {
    const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
    const blocks = content.split(/^## (?:Câu|Question) \d+/gmi).slice(1);
    
    blocks.forEach(block => {
      combinedMarkdown += `## Câu ${questionCounter++}\n${clean(block)}\n\n`;
    });
  }

  const targetFile = path.join(root, 'questions.js');
  const jsOutput = `window.questionBankData = ${JSON.stringify(combinedMarkdown.trim())};\n`;
  fs.writeFileSync(targetFile, jsOutput, 'utf8');
  console.log(`Đã tạo thành công ${questionCounter - 1} câu hỏi -> questions.js`);
}

processFolder();
