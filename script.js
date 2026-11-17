document.addEventListener('DOMContentLoaded', () => {
    const BUILD_CODE = 'cv-quiz-20261117-v6';

    // ===== MATH RENDERING (KATEX) =====
    function renderMath(targetEl) {
        if (!targetEl) return;

        const doRender = () => {
            if (typeof window.renderMathInElement === 'function') {
                try {
                    window.renderMathInElement(targetEl, {
                        delimiters: [
                            { left: '$$', right: '$$', display: true },
                            { left: '$', right: '$', display: false },
                            { left: '\\(', right: '\\)', display: false },
                            { left: '\\[', right: '\\]', display: true }
                        ],
                        throwOnError: false
                    });
                    return true;
                } catch (err) {
                    console.warn('KaTeX auto-render error:', err);
                }
            }

            // Fallback: direct renderToString on text nodes
            if (window.katex && typeof window.katex.renderToString === 'function') {
                try {
                    const walker = document.createTreeWalker(targetEl, NodeFilter.SHOW_TEXT, null, false);
                    const nodesToReplace = [];
                    let node;
                    while ((node = walker.nextNode())) {
                        if (node.nodeValue && /\$([^$\n]+)\$/.test(node.nodeValue)) {
                            nodesToReplace.push(node);
                        }
                    }
                    nodesToReplace.forEach(textNode => {
                        const span = document.createElement('span');
                        span.innerHTML = textNode.nodeValue.replace(/\$([^$\n]+)\$/g, (_, math) => {
                            try {
                                return window.katex.renderToString(math, { throwOnError: false });
                            } catch (e) {
                                return '$' + math + '$';
                            }
                        });
                        textNode.parentNode.replaceChild(span, textNode);
                    });
                    return true;
                } catch (e) {
                    console.warn('KaTeX fallback render error:', e);
                }
            }
            return false;
        };

        if (!doRender()) {
            setTimeout(doRender, 80);
            setTimeout(doRender, 250);
            setTimeout(doRender, 600);
        }
    }

    // ===== DOM ELEMENTS =====
    const tabNav = document.getElementById('tab-nav');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabIndicator = document.querySelector('.tab-indicator');
    const tabPanels = document.querySelectorAll('.tab-panel');

    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const quizModeBadge = document.getElementById('quiz-mode-badge');

    // Tab panels
    const startBtn = document.getElementById('start-btn');
    const generateBtn = document.getElementById('generate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const roundBadge = document.getElementById('round-badge');
    const roundInfo = document.getElementById('round-info');
    const totalQuestionsEl = document.getElementById('total-questions');
    const midtermStartBtn = document.getElementById('midterm-start-btn');
    const midtermRandomBtn = document.getElementById('midterm-random-btn');
    const midtermCountEl = document.getElementById('midterm-count');
    const finalStartBtn = document.getElementById('final-start-btn');
    const finalCountEl = document.getElementById('final-count');

    // Shared quiz elements
    const nextBtn = document.getElementById('next-btn');
    const quizBackBtn = document.getElementById('quiz-back-btn');
    const questionText = document.getElementById('question-text');
    const questionCode = document.getElementById('question-code');
    const codeBlockWrapper = document.getElementById('code-block-wrapper');
    const optionsContainer = document.getElementById('options-container');
    const questionNumber = document.getElementById('question-number');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const timerEl = document.getElementById('timer');

    // Results elements
    const scoreText = document.getElementById('score-text');
    const scoreCircleFill = document.getElementById('score-circle-fill');
    const correctCountEl = document.getElementById('correct-count');
    const wrongCountEl = document.getElementById('wrong-count');
    const resultMessage = document.getElementById('result-message');
    const resultButtons = document.getElementById('result-buttons');
    const roundStat = document.getElementById('round-stat');
    const reviewInfoDiv = document.getElementById('review-info');
    const historyList = document.getElementById('history-list');
    const reviewList = document.getElementById('review-list');
    const reviewSummary = document.getElementById('review-summary');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const buildCodeEl = document.getElementById('build-code');
    const historyModal = document.getElementById('history-modal');
    const historyModalTitle = document.getElementById('history-modal-title');
    const historyModalSummary = document.getElementById('history-modal-summary');
    const historyModalList = document.getElementById('history-modal-list');
    const historyModalClose = document.getElementById('history-modal-close');

    // ===== STATE =====
    let allQuestions = [];
    let midtermQuestions = [];
    let finalQuestions = [];
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let secondsElapsed = 0;
    let isAnswered = false;
    let currentQuizKey = '';
    let currentQuizSourceName = '';
    let currentQuizBadgeText = '';
    let currentAnswerRecords = [];
    let activeTab = 'topics';

    // Smart Spaced Repetition state
    let currentRound = 1;
    let wrongQuestionIds = [];
    let correctQuestionIds = [];
    const STORAGE_KEY = 'cv_quiz_smart_state';
    const QUIZ_HISTORY_KEY = 'cv_quiz_history';
    const QUESTIONS_PER_EXAM = 30;

    // ===== TOPIC CATEGORIES CONFIG (COMPUTER VISION) =====
    const TOPIC_CATEGORIES = [
        {
            id: 'bai1',
            icon: '👁️',
            title: 'Bài 1: Tổng Quan về Thị Giác Máy Tính',
            subtopics: [
                {
                    id: 'b1-a',
                    title: '1. Bản chất ảnh số & Computer Vision',
                    icon: '🌐',
                    desc: 'Khái niệm, biểu diễn ảnh trong NumPy, sampling, quantisation và bit depth.',
                    tags: ['Bài 1: Bản chất ảnh số']
                },
                {
                    id: 'b1-b',
                    title: '2. Xử lý ảnh cơ bản với Python',
                    icon: '🐍',
                    desc: 'Thao tác ảnh với Pillow, NumPy, RGB sang Grayscale và truy cập pixel.',
                    tags: ['Bài 1: Xử lý ảnh cơ bản với Python']
                },
                {
                    id: 'b1-c',
                    title: '3. Histogram & Cân bằng Histogram',
                    icon: '📊',
                    desc: 'Phân tích histogram, hàm phân phối tích lũy (CDF) và cân bằng độ tương phản.',
                    tags: ['Bài 1: Histogram']
                },
                {
                    id: 'b1-d',
                    title: '4. Biến đổi độ sáng, Ngưỡng & ROI',
                    icon: '✂️',
                    desc: 'Phân ngưỡng ảnh (thresholding), phép biến đổi alpha/beta và cắt vùng quan tâm (ROI).',
                    tags: ['Bài 1: Biến đổi độ sáng']
                },
                {
                    id: 'b1-e',
                    title: '5. Hiệu năng, Bộ nhớ & Tối ưu',
                    icon: '⚡',
                    desc: 'Tối ưu hóa vector hóa với NumPy, SIMD và cơ chế truy cập bộ nhớ trực tiếp.',
                    tags: ['Bài 1: Hiệu năng']
                }
            ]
        },
        {
            id: 'bai2',
            icon: '⚙️',
            title: 'Bài 2: Tiền Xử Lý Ảnh (Image Preprocessing)',
            subtopics: [
                {
                    id: 'b2-point-linear',
                    title: '1. Thao tác và Xử lý ảnh cơ bản',
                    icon: '🎨',
                    desc: 'Point Operators, RGB -> Gray -> Binary, Gamma, Histogram, Lọc tuyến tính Convolution.',
                    tags: ['Bài 2: Thao tác và Xử lý ảnh cơ bản', 'Thao tác cơ bản']
                },
                {
                    id: 'b2-morph-geom',
                    title: '2. Hình thái học & Biến đổi hình học',
                    icon: '📐',
                    desc: 'Phép Dilation, Erosion, Opening, Closing, Xoay ảnh và Nội suy (Nearest, Bilinear).',
                    tags: ['Bài 2: Hình thái học & Biến đổi hình học', 'Hình thái học', 'Hình học']
                }
            ]
        },
        {
            id: 'bai3',
            icon: '📐',
            title: 'Bài 3: Phân Tách Ảnh & Rút Trích Đặc Tả',
            subtopics: [
                {
                    id: 'b3-all',
                    title: 'Phân vùng & Trích xuất đặc trưng',
                    icon: '🔍',
                    desc: 'Phân ngưỡng Otsu, Canny edge detector, Harris corner, SIFT, HOG.',
                    tags: ['Bài 3: Phân vùng & Trích xuất đặc trưng', 'Đặc trưng']
                }
            ]
        },
        {
            id: 'bai4',
            icon: '🎲',
            title: 'Bài 4: Xác Suất - Thống Kê trong Thị Giác Máy Tính',
            subtopics: [
                {
                    id: 'b4-all',
                    title: 'Xác suất & Ước lượng tham số',
                    icon: '📈',
                    desc: 'Phân phối chuẩn (Gaussian), ước lượng MLE, MAP và định lý Bayes.',
                    tags: ['Bài 4: Xác suất & Ước lượng tham số', 'Xác suất']
                }
            ]
        },
        {
            id: 'bai5',
            icon: '🏷️',
            title: 'Bài 5: Classifier & Dimension Reduction',
            subtopics: [
                {
                    id: 'b5-all',
                    title: 'Phân lớp & Giảm chiều dữ liệu',
                    icon: '📉',
                    desc: 'K-NN, Support Vector Machine (SVM), PCA, LDA.',
                    tags: ['Bài 5', 'Phân lớp', 'Giảm chiều']
                }
            ]
        },
        {
            id: 'bai6',
            icon: '🧠',
            title: 'Bài 6: Mạng Neural Nhân Tạo & Deep Learning',
            subtopics: [
                {
                    id: 'b6-all',
                    title: 'Mạng Neural & CNN',
                    icon: '🔮',
                    desc: 'Perceptron, MLP, Backpropagation và mạng nơ-ron tích chập (CNN).',
                    tags: ['Bài 6', 'Mạng Neural', 'CNN']
                }
            ]
        }
    ];

    // ===== MIDTERM TOPIC CATEGORIES CONFIG =====
    const MIDTERM_CATEGORIES = [
        {
            id: 'midterm-tong-quan',
            icon: '👁️',
            title: '1. Tổng quan về Thị giác máy tính (Computer Vision)',
            desc: 'Mục đích & các bước nhận dạng ảnh, dữ liệu ma trận ảnh, ứng dụng CV.',
            tags: ['Tổng quan -'],
            subtopics: [
                {
                    id: 'mt-khai-niem',
                    title: 'Khái niệm & Các bước cơ bản trong nhận dạng ảnh',
                    desc: 'Chu trình: Lấy ảnh -> Tiền xử lý -> Phân tách ảnh -> Rút đặc tả -> Nhận dạng -> Hậu xử lý.',
                    tags: ['Tổng quan - Khái niệm']
                },
                {
                    id: 'mt-du-lieu',
                    title: 'Dữ liệu ảnh trong Máy tính',
                    desc: 'Ma trận điểm ảnh (pixel), kênh màu (RGB, Grayscale, Binary), sampling và quantisation.',
                    tags: ['Tổng quan - Dữ liệu ảnh']
                },
                {
                    id: 'mt-ung-dung',
                    title: 'Ứng dụng của Thị giác Máy tính',
                    desc: 'Ứng dụng thực tế trong y tế, xe tự hành, công nghiệp, giám sát an ninh và nhận diện.',
                    tags: ['Tổng quan - Ứng dụng']
                }
            ]
        },
        {
            id: 'midterm-thao-tac-co-ban',
            icon: '⚙️',
            title: '2. Thao tác và Xử lý ảnh cơ bản',
            desc: 'Point Operators (RGB/Gray/Binary, Gamma, Linear Stretch, Whitening), Lọc tuyến tính (Convolution, Padding, Gaussian, Sobel, Gradient).',
            tags: ['Thao tác cơ bản -'],
            subtopics: [
                {
                    id: 'mt-point-ops',
                    title: 'Thao tác trên Pixel (Point Operators)',
                    desc: 'Chuyển đổi màu sắc (RGB -> Gray -> Binary), điều chỉnh độ sáng (cộng) & tương phản (nhân), Gamma, Linear Stretch, Cân bằng trắng (Whitening).',
                    tags: ['Thao tác cơ bản - Point Operators']
                },
                {
                    id: 'mt-linear-filter',
                    title: 'Lọc tuyến tính (Nhân chập - Convolution, Tương quan)',
                    desc: 'Nguyên tắc nhân chập, nhân tương quan, Padding. Ứng dụng Kernel: làm mờ (Gaussian), phát hiện cạnh (Sobel/Gradient), tính độ lớn & hướng Gradient.',
                    tags: ['Thao tác cơ bản - Lọc tuyến tính']
                }
            ]
        },
        {
            id: 'midterm-hinh-thai-hinh-hoc',
            icon: '📐',
            title: '3. Phép biến đổi Hình thái học & Hình học (Morphological & Geometric)',
            desc: 'Morphological (Dilation, Erosion, Opening, Closing) và Geometric (Xoay ảnh, Ma trận xoay, Nội suy ảnh).',
            tags: ['Hình thái học -', 'Hình học -'],
            subtopics: [
                {
                    id: 'mt-morphology',
                    title: 'Phép biến đổi Hình thái học (Morphological)',
                    desc: 'Phép Giãn nở (Dilation), Phép Co (Erosion), Phép Mở (Opening), Phép Đóng (Closing), Structuring Element.',
                    tags: ['Hình thái học - Morphological']
                },
                {
                    id: 'mt-geometry',
                    title: 'Phép biến đổi Hình học (Geometric)',
                    desc: 'Phép Xoay ảnh (Rotation matrix) và các kỹ thuật nội suy ảnh (Nearest Neighbor, Bilinear, Bicubic).',
                    tags: ['Hình học - Geometric']
                }
            ]
        },
        {
            id: 'midterm-dac-trung',
            icon: '🔍',
            title: '4. Dò tìm và Mô tả đặc trưng (Feature Detector & Descriptors)',
            desc: 'Canny Edge (NMS, Hysteresis), Harris Corner (Tensor), LBP, HOG, SIFT 128D, Histogram đặc trưng.',
            tags: ['Đặc trưng -'],
            subtopics: [
                {
                    id: 'mt-canny',
                    title: 'Dò tìm cạnh Canny (Canny Edge Detector)',
                    desc: 'Giảm nhiễu (Gaussian), tính gradient (độ lớn & hướng), Non-Maximum Suppression (NMS), phân ngưỡng Hysteresis.',
                    tags: ['Đặc trưng - Dò tìm cạnh Canny']
                },
                {
                    id: 'mt-harris',
                    title: 'Dò tìm góc Harris (Harris Corner Detector)',
                    desc: 'Tính ma trận kết cấu tensor, hàm đáp ứng Harris R (công thức gốc & cải tiến), Non-Maximum Suppression.',
                    tags: ['Đặc trưng - Dò tìm góc Harris']
                },
                {
                    id: 'mt-lbp',
                    title: 'Local Binary Patterns (LBP)',
                    desc: 'Nguyên tắc LBP cơ bản, Uniform LBP (59 nhóm) và Non-uniform LBP trong mô tả kết cấu bề mặt.',
                    tags: ['Đặc trưng - Local Binary Patterns']
                },
                {
                    id: 'mt-hog',
                    title: 'Histogram of Oriented Gradients (HOG)',
                    desc: 'Tính gradient, xây dựng Histogram cho Cell, chuẩn hóa theo Block gối nhau, tạo vector HOG cuối cùng.',
                    tags: ['Đặc trưng - Histogram of Oriented Gradients']
                },
                {
                    id: 'mt-sift',
                    title: 'SIFT (Scale-Invariant Feature Transform)',
                    desc: 'Detector (Scale-Space, Difference of Gaussians DoG, gán hướng). Descriptor (vector 128 chiều từ 16 histogram 8-bin).',
                    tags: ['Đặc trưng - SIFT']
                },
                {
                    id: 'mt-hist-feat',
                    title: 'Histogram (Mô tả đặc trưng chung)',
                    desc: 'Nguyên tắc, cách tính, ứng dụng và hạn chế của histogram đặc trưng.',
                    tags: ['Đặc trưng - Histogram đặc trưng']
                }
            ]
        },
        {
            id: 'midterm-xac-suat',
            icon: '🎲',
            title: '5. Lý thuyết Xác suất & Thống kê (Probability & Statistics)',
            desc: 'Biến ngẫu nhiên PMF/PDF, Định luật Bayes, Phân bố Bernoulli/Categorical & Gaussian, Ước lượng MLE & MAP.',
            tags: ['Xác suất -'],
            subtopics: [
                {
                    id: 'mt-prob-basics',
                    title: 'Khái niệm cơ bản',
                    desc: 'Biến ngẫu nhiên rời rạc/liên tục, PMF, PDF, xác suất kết hợp (Joint) & phân bố biên (Marginal), xác suất có điều kiện (Conditional).',
                    tags: ['Xác suất - Khái niệm cơ bản']
                },
                {
                    id: 'mt-bayes',
                    title: 'Định luật Bayes & Ứng dụng',
                    desc: 'Công thức và diễn giải các thành phần: Posterior, Likelihood, Prior, Evidence trong phân loại đối tượng.',
                    tags: ['Xác suất - Định luật Bayes']
                },
                {
                    id: 'mt-distributions',
                    title: 'Phân bố xác suất thông dụng',
                    desc: 'Phân bố Bernoulli và Categorical (mô hình rời rạc), phân bố Gaussian 1-biến và Đa biến (mô hình liên tục/nhiễu).',
                    tags: ['Xác suất - Phân bố thông dụng']
                },
                {
                    id: 'mt-estimation',
                    title: 'Ước lượng tham số (Khớp mô hình)',
                    desc: 'Maximum Likelihood (ML / MLE) và Maximum A Posteriori (MAP).',
                    tags: ['Xác suất - Ước lượng tham số']
                }
            ]
        },
        {
            id: 'midterm-dac-biet',
            icon: '⭐',
            title: '6. Bộ câu hỏi Đặc biệt (Đề thi Moodle & Tổng hợp nâng cao)',
            desc: '126 câu hỏi trắc nghiệm đặc biệt trích xuất từ đề thi HCMUS Moodle và bộ câu hỏi nâng cao, đã lọc sạch 100% trùng lặp.',
            tags: ['Đặc biệt -'],
            subtopics: [
                {
                    id: 'mt-dac-biet-moodle',
                    title: 'Bộ đề thi Moodle Quiz 1 (Thực tế)',
                    desc: '74 câu hỏi trắc nghiệm thực tế từ các đề thi HCMUS Moodle đã khử sạch trùng lặp.',
                    tags: ['Đặc biệt - Moodle Quiz']
                },
                {
                    id: 'mt-dac-biet-tonghop',
                    title: 'Bộ câu hỏi Tổng hợp Nâng cao & Bài tập',
                    desc: '52 câu hỏi tổng hợp lý thuyết, bài tập tính toán ma trận, HOG block, SIFT cell, MAP đã khử trùng lặp.',
                    tags: ['Đặc biệt - Tổng hợp nâng cao']
                }
            ]
        }
    ];

    // ===== QUESTION PARSER =====
    function parseMarkdown(md) {
        if (!md || typeof md !== 'string') return [];
        const questions = [];
        const questionBlocks = md.split(/^## (?:Câu|Question) (?:sai )?\d+/mi).slice(1);
        questionBlocks.forEach((block, idx) => {
            const lines = block.trim().split('\n');
            let qCode = '', topic = '', explanation = '';
            const qTextLines = [];
            let options = [], correctIndex = -1, correctAnswerText = '', inCodeBlock = false;

            lines.forEach(line => {
                const t = line.trim();
                if (t.startsWith('```')) { inCodeBlock = !inCodeBlock; return; }
                if (inCodeBlock) { qCode += line + '\n'; return; }
                if (t.startsWith('Chủ đề:') || t.startsWith('Topic:')) {
                    topic = t.replace(/^(?:Chủ đề|Topic):/i, '').trim();
                    return;
                }
                if (t.startsWith('- Bạn chọn:') || t.startsWith('- Đáp án đúng:')) return;
                if (t === '---' || t === '**Select one:**' || t === 'Select one:') return;

                const answerMatch = t.match(/^(?:\*\*)?(?:Đáp án đúng|Correct answer)\s*:?\s*(?:\*\*)?\s*(.+?)\s*(?:\*\*)?$/i);
                if (answerMatch) {
                    correctAnswerText = answerMatch[1].trim();
                    const letterMatch = correctAnswerText.match(/^([A-D])(?:[).:]\s*|\s*$)(.*)$/i);
                    if (letterMatch) {
                        correctIndex = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
                        if (letterMatch[2]) correctAnswerText = letterMatch[2].trim();
                    }
                    return;
                }

                if (t.startsWith('- [ ]') || t.startsWith('- [x]')) {
                    const isCorrect = t.startsWith('- [x]');
                    options.push(t.replace(/- \[[ x]\] /, ''));
                    if (isCorrect) correctIndex = options.length - 1;
                    return;
                }

                const optionMatch = t.match(/^([A-D])[\).]\s+(.+)$/);
                if (optionMatch) {
                    options.push(optionMatch[2].trim());
                    return;
                }

                if (t.startsWith('>')) {
                    explanation = t.replace(/^>\s*(?:Giải thích:)?/i, '').trim();
                    return;
                }

                if (options.length > 0 && t) {
                    options[options.length - 1] += '\n' + line;
                    return;
                }

                if (t && !options.length) qTextLines.push(line);
            });

            const parsedQuestion = splitQuestionTextAndCode(qTextLines.join('\n'), qCode);
            if (correctIndex < 0 && correctAnswerText) {
                const normalizeAnswer = val => val
                    .replace(/^`|`$/g, '')
                    .replace(/\s+/g, ' ')
                    .trim()
                    .toLowerCase();
                const normalizedAns = normalizeAnswer(correctAnswerText);
                correctIndex = options.findIndex(opt => normalizeAnswer(opt) === normalizedAns);
            }

            if (parsedQuestion.text && options.length > 0 && correctIndex >= 0) {
                questions.push({
                    id: idx,
                    text: parsedQuestion.text,
                    code: parsedQuestion.code,
                    options,
                    correct: correctIndex,
                    explanation,
                    topic: topic || 'Chung'
                });
            }
        });
        return questions;
    }

    function splitQuestionTextAndCode(text, code) {
        const normalizedText = String(text || '').replace(/\r\n/g, '\n').trim();
        const normalizedCode = String(code || '').trim();
        if (!normalizedText) return { text: '', code: normalizedCode };
        if (normalizedCode) return { text: normalizedText, code: normalizedCode };

        const lines = normalizedText.split('\n');
        const codeStart = findLooseCodeStart(lines);
        if (codeStart === -1) return { text: normalizedText, code: '' };

        const questionLines = lines.slice(0, codeStart).filter(line => line.trim());
        const codeLines = trimBlankLines(lines.slice(codeStart));
        return {
            text: questionLines.join('\n').trim(),
            code: codeLines.join('\n').trim()
        };
    }

    function findLooseCodeStart(lines) {
        for (let i = 0; i < lines.length; i++) {
            if (!looksLikeCodeStart(lines[i])) continue;
            if (scoreCodeRun(lines.slice(i)) >= 2) return i;
        }
        return -1;
    }

    function looksLikeCodeStart(line) {
        const t = line.trim();
        if (!t) return false;
        return /^(import|from|def|class|if|elif|else|for|while|try|except|finally|return|with|lambda)\b/.test(t)
            || /^(cv2\.|np\.|plt\.|torch\.|nn\.|tf\.)/.test(t)
            || /^(using|namespace|public|private|protected|static|void|int|float|double|char|bool)\b/.test(t)
            || /^#include\b/.test(t)
            || /^\w+\s*=\s*(?:np|cv2|plt|torch|\[|\{)/.test(t);
    }

    function scoreCodeRun(lines) {
        let score = 0;
        let seenCode = false;
        for (const line of lines) {
            const t = line.trim();
            if (!t) {
                if (seenCode) score += 0.25;
                continue;
            }
            if (/^[{}]$/.test(t) || /[;{}]$/.test(t) || looksLikeCodeStart(t) || /:\s*$/.test(t)) {
                score++;
                seenCode = true;
                continue;
            }
            if (seenCode && /^[A-Za-z_]\w*\s*\(.*\)/.test(t)) score++;
        }
        return score;
    }

    function trimBlankLines(lines) {
        const copy = [...lines];
        while (copy.length && !copy[0].trim()) copy.shift();
        while (copy.length && !copy[copy.length - 1].trim()) copy.pop();
        return copy;
    }

    // ===== LOAD QUESTIONS =====
    function loadQuestions() {
        if (window.questionBankData) {
            allQuestions = parseMarkdown(window.questionBankData);
            if (totalQuestionsEl) totalQuestionsEl.textContent = allQuestions.length;
        }

        if (window.midtermQuestionBankData) {
            midtermQuestions = parseMarkdown(window.midtermQuestionBankData);
            if (midtermCountEl) midtermCountEl.textContent = midtermQuestions.length;
        } else {
            midtermQuestions = allQuestions;
            if (midtermCountEl) midtermCountEl.textContent = midtermQuestions.length;
        }
        buildMidtermTopicUI('midterm-topics-container', midtermQuestions.length ? midtermQuestions : allQuestions);

        if (window.finalQuestionBankData) {
            finalQuestions = parseMarkdown(window.finalQuestionBankData);
            if (finalCountEl) finalCountEl.textContent = finalQuestions.length;
        }
    }

    // ===== TAB SWITCHING =====
    function switchTab(tabId) {
        activeTab = tabId;
        tabBtns.forEach((btn, i) => {
            const isActive = btn.dataset.tab === tabId;
            btn.classList.toggle('active', isActive);
            if (isActive && tabIndicator) {
                const count = tabBtns.length || 4;
                tabIndicator.style.width = `calc(${100 / count}% - 6px)`;
                tabIndicator.style.transform = `translateX(${i * 100}%)`;
            }
        });

        tabPanels.forEach(p => p.classList.toggle('active', p.dataset.tab === tabId));
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        tabNav.classList.remove('hidden');

        const hashes = {
            topics: '#theobai',
            basic: '#luyentap',
            midterm: '#giuaki',
            final: '#cuoiki'
        };
        const hash = hashes[tabId] || '#theobai';
        if (window.location.hash !== hash) window.location.hash = hash;
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            switchTab(btn.dataset.tab);
        });
    });

    function syncTabFromHash() {
        const hash = window.location.hash;
        const hashMap = {
            '#theobai': 'topics',
            '#luyentap': 'basic',
            '#giuaki': 'midterm',
            '#cuoiki': 'final'
        };
        if (hashMap[hash]) switchTab(hashMap[hash]);
        else switchTab('topics');
    }

    window.addEventListener('hashchange', () => {
        if (!quizScreen.classList.contains('active')) syncTabFromHash();
    });

    // ===== TOPIC MATCHING & RENDERING =====
    function getQuestionsForTags(tags, sourceQuestions) {
        if (!tags || !tags.length) return [];
        const lowerTags = tags.map(t => t.toLowerCase());
        return sourceQuestions.filter(q => {
            const topic = (q.topic || '').toLowerCase();
            return lowerTags.some(tag => topic.includes(tag));
        });
    }

    function buildTopicUI(containerId = 'topics-container', questionSource = allQuestions) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        TOPIC_CATEGORIES.forEach(cat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'topic-category';

            let catQuestions = [];
            let catCount = 0;
            cat.subtopics.forEach(sub => {
                sub._questions = getQuestionsForTags(sub.tags, questionSource);
                sub._count = sub._questions.length;
                catCount += sub._count;
                sub._questions.forEach(q => {
                    if (!catQuestions.some(existing => existing.id === q.id)) {
                        catQuestions.push(q);
                    }
                });
            });

            // Also match any general questions tagged with the lesson title/id
            const lessonGeneralQuestions = getQuestionsForTags([cat.id, cat.title.split(':')[0]], questionSource);
            lessonGeneralQuestions.forEach(q => {
                if (!catQuestions.some(existing => existing.id === q.id)) {
                    catQuestions.push(q);
                }
            });
            if (catQuestions.length > catCount) catCount = catQuestions.length;

            const header = document.createElement('div');
            header.className = 'category-header open';
            header.innerHTML = `
                <span class="category-icon">${cat.icon}</span>
                <span class="category-title">${cat.title}</span>
                <span class="category-count">${catCount} câu</span>
                <button class="category-start-all-btn ${catCount > 0 ? 'primary-btn' : 'secondary-btn disabled'}" ${catCount === 0 ? 'disabled' : ''}>
                    ⚡ Làm tất cả
                </button>
                <span class="category-chevron">▼</span>
            `;

            const startAllBtn = header.querySelector('.category-start-all-btn');
            if (startAllBtn && catCount > 0) {
                startAllBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    startQuiz(catQuestions, `${cat.title} - Toàn bộ (${catCount} câu)`, 'topic');
                });
            }

            const grid = document.createElement('div');
            grid.className = 'subtopics-grid open';

            // Top card: Do all questions for this lesson
            if (catCount > 0) {
                const allCard = document.createElement('div');
                allCard.className = 'subtopic-card all-card';
                allCard.innerHTML = `
                    <div class="subtopic-card-header">
                        <span class="subtopic-icon">⚡</span>
                        <span class="subtopic-title">Làm tất cả câu hỏi ${cat.title}</span>
                    </div>
                    <span class="subtopic-desc">Làm trọn bộ tất cả ${catCount} câu hỏi của bài học này.</span>
                    <span class="subtopic-badge count">${catCount} câu</span>
                `;
                allCard.addEventListener('click', () => {
                    startQuiz(catQuestions, `${cat.title} - Toàn bộ (${catCount} câu)`, 'topic');
                });
                grid.appendChild(allCard);
            }

            cat.subtopics.forEach(sub => {
                const card = document.createElement('div');
                const isDisabled = sub._count === 0;
                card.className = 'subtopic-card' + (isDisabled ? ' disabled' : '');
                card.innerHTML = `
                    <div class="subtopic-card-header">
                        <span class="subtopic-icon">${sub.icon}</span>
                        <span class="subtopic-title">${sub.title}</span>
                    </div>
                    <span class="subtopic-desc">${sub.desc}</span>
                    <span class="subtopic-badge ${isDisabled ? 'soon' : 'count'}">
                        ${isDisabled ? 'Sắp có' : sub._count + ' câu'}
                    </span>
                `;

                if (!isDisabled) {
                    card.addEventListener('click', () => {
                        startQuiz(sub._questions, sub.title, 'topic');
                    });
                }
                grid.appendChild(card);
            });

            header.addEventListener('click', () => {
                header.classList.toggle('open');
                grid.classList.toggle('open');
            });

            catDiv.appendChild(header);
            catDiv.appendChild(grid);
            container.appendChild(catDiv);
        });

        // Unclassified questions fallback
        const matchedIds = new Set();
        TOPIC_CATEGORIES.forEach(cat => {
            cat.subtopics.forEach(sub => {
                if (sub._questions) sub._questions.forEach(q => matchedIds.add(q.id));
            });
        });

        const unclassified = questionSource.filter(q => !matchedIds.has(q.id));
        if (unclassified.length > 0) {
            const uncatDiv = document.createElement('div');
            uncatDiv.className = 'topic-category';
            const uncatHeader = document.createElement('div');
            uncatHeader.className = 'category-header open';
            uncatHeader.innerHTML = `
                <span class="category-icon">📂</span>
                <span class="category-title">Chủ đề khác</span>
                <span class="category-count">${unclassified.length} câu</span>
                <span class="category-chevron">▼</span>
            `;
            const uncatGrid = document.createElement('div');
            uncatGrid.className = 'subtopics-grid open';

            const uncatCard = document.createElement('div');
            uncatCard.className = 'subtopic-card';
            uncatCard.innerHTML = `
                <div class="subtopic-card-header">
                    <span class="subtopic-icon">📋</span>
                    <span class="subtopic-title">Các câu hỏi còn lại</span>
                </div>
                <span class="subtopic-desc">Các câu hỏi chưa phân theo chuyên đề riêng.</span>
                <span class="subtopic-badge count">${unclassified.length} câu</span>
            `;
            uncatCard.addEventListener('click', () => {
                startQuiz(unclassified, 'Chủ đề khác', 'topic');
            });
            uncatGrid.appendChild(uncatCard);
            uncatDiv.appendChild(uncatHeader);
            uncatDiv.appendChild(uncatGrid);
            container.appendChild(uncatDiv);
        }
    }

    // ===== MIDTERM TOPIC RENDERING =====
    function buildMidtermTopicUI(containerId = 'midterm-topics-container', questionSource = (midtermQuestions.length ? midtermQuestions : allQuestions)) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        MIDTERM_CATEGORIES.forEach(cat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'topic-category';

            let catQuestions = [];
            let catCount = 0;
            cat.subtopics.forEach(sub => {
                sub._questions = getQuestionsForTags(sub.tags, questionSource);
                sub._count = sub._questions.length;
                catCount += sub._count;
                sub._questions.forEach(q => {
                    if (!catQuestions.some(existing => existing.id === q.id)) {
                        catQuestions.push(q);
                    }
                });
            });

            // Fallback for general tags matching category
            const generalQuestions = getQuestionsForTags(cat.tags, questionSource);
            generalQuestions.forEach(q => {
                if (!catQuestions.some(existing => existing.id === q.id)) {
                    catQuestions.push(q);
                }
            });
            if (catQuestions.length > catCount) catCount = catQuestions.length;

            const header = document.createElement('div');
            header.className = 'category-header open';
            header.innerHTML = `
                <span class="category-icon">${cat.icon}</span>
                <span class="category-title">${cat.title}</span>
                <span class="category-count">${catCount} câu</span>
                <button class="category-start-all-btn ${catCount > 0 ? 'primary-btn' : 'secondary-btn disabled'}" ${catCount === 0 ? 'disabled' : ''}>
                    ⚡ Ôn chủ đề này
                </button>
                <span class="category-chevron">▼</span>
            `;

            const startBtn = header.querySelector('.category-start-all-btn');
            if (startBtn && catCount > 0) {
                startBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    startQuiz(catQuestions, `${cat.title} (${catCount} câu)`, 'midterm');
                });
            }

            const grid = document.createElement('div');
            grid.className = 'subtopics-grid open';

            // Top card: Do all questions for this category
            if (catCount > 0) {
                const allCard = document.createElement('div');
                allCard.className = 'subtopic-card all-card';
                allCard.innerHTML = `
                    <div class="subtopic-card-header">
                        <span class="subtopic-icon">⚡</span>
                        <span class="subtopic-title">Làm tất cả câu hỏi ${cat.title}</span>
                    </div>
                    <span class="subtopic-desc">${cat.desc}</span>
                    <span class="subtopic-badge count">${catCount} câu</span>
                `;
                allCard.addEventListener('click', () => {
                    startQuiz(catQuestions, `${cat.title} (${catCount} câu)`, 'midterm');
                });
                grid.appendChild(allCard);
            }

            cat.subtopics.forEach(sub => {
                const card = document.createElement('div');
                const isDisabled = sub._count === 0;
                card.className = 'subtopic-card' + (isDisabled ? ' disabled' : '');
                card.innerHTML = `
                    <div class="subtopic-card-header">
                        <span class="subtopic-icon">📌</span>
                        <span class="subtopic-title">${sub.title}</span>
                    </div>
                    <span class="subtopic-desc">${sub.desc}</span>
                    <span class="subtopic-badge ${isDisabled ? 'soon' : 'count'}">
                        ${isDisabled ? 'Sắp có' : sub._count + ' câu'}
                    </span>
                `;

                if (!isDisabled) {
                    card.addEventListener('click', () => {
                        startQuiz(sub._questions, `${sub.title} (${sub._count} câu)`, 'midterm');
                    });
                }
                grid.appendChild(card);
            });

            header.addEventListener('click', () => {
                header.classList.toggle('open');
                grid.classList.toggle('open');
            });

            catDiv.appendChild(header);
            catDiv.appendChild(grid);
            container.appendChild(catDiv);
        });
    }

    // ===== SMART PRACTICE QUIZ =====
    function loadSmartState() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const data = JSON.parse(saved);
                currentRound = data.round || 1;
                wrongQuestionIds = data.wrongIds || [];
                correctQuestionIds = data.correctIds || [];
            } catch (e) {
                resetSmartState();
            }
        }
    }

    function saveSmartState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            round: currentRound,
            wrongIds: wrongQuestionIds,
            correctIds: correctQuestionIds
        }));
    }

    function resetSmartState() {
        currentRound = 1;
        wrongQuestionIds = [];
        correctQuestionIds = [];
        localStorage.removeItem(STORAGE_KEY);
        updateRoundUI();
    }

    function updateRoundUI() {
        if (roundBadge) roundBadge.textContent = `Lần ${currentRound}`;
        const roundDescriptions = {
            1: 'Lần đầu — Chọn ngẫu nhiên hoàn toàn',
            2: 'Lần 2 — Ưu tiên câu sai lần 1 + một phần câu đúng',
            3: 'Lần 3 — Tập trung câu sai lần 2 + một phần câu đúng'
        };
        if (roundInfo) roundInfo.textContent = roundDescriptions[currentRound] || 'Luyện tập';
    }

    function selectQuestionsForRound() {
        if (!allQuestions.length) return [];
        if (currentRound === 1) {
            return shuffleArray([...allQuestions]).slice(0, QUESTIONS_PER_EXAM);
        }

        const wrongQuestions = allQuestions.filter(q => wrongQuestionIds.includes(q.id));
        const correctQuestions = allQuestions.filter(q => correctQuestionIds.includes(q.id));
        const otherQuestions = allQuestions.filter(q =>
            !wrongQuestionIds.includes(q.id) && !correctQuestionIds.includes(q.id)
        );

        const repeatProb = currentRound === 2 ? 0.5 : 0.3;
        const repeatedCorrect = correctQuestions.filter(() => Math.random() < repeatProb);
        let pool = [...wrongQuestions, ...repeatedCorrect];

        if (pool.length < QUESTIONS_PER_EXAM) {
            const needed = QUESTIONS_PER_EXAM - pool.length;
            const remaining = shuffleArray([...otherQuestions, ...correctQuestions.filter(q => !repeatedCorrect.includes(q))]);
            pool = pool.concat(remaining.slice(0, needed));
        }

        return shuffleArray(pool).slice(0, QUESTIONS_PER_EXAM);
    }

    // ===== QUIZ FLOW =====
    function startQuiz(questions, badgeText, sourceName) {
        if (!questions.length) {
            alert('Chưa có câu hỏi trong mục này!');
            return;
        }

        // Randomize option order for each question so answers are never predictably located
        selectedQuestions = questions.map(q => {
            if (!q.options || q.options.length <= 1) return { ...q };
            const indices = q.options.map((_, i) => i);
            const shuffledIndices = shuffleArray(indices);
            return {
                ...q,
                options: shuffledIndices.map(i => q.options[i]),
                correct: shuffledIndices.indexOf(q.correct)
            };
        });
        currentQuestionIndex = 0;
        score = 0;
        secondsElapsed = 0;
        isAnswered = false;
        currentAnswerRecords = [];
        currentQuizBadgeText = badgeText;
        currentQuizSourceName = sourceName;

        tabPanels.forEach(p => p.classList.remove('active'));
        tabNav.classList.add('hidden');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');

        if (quizModeBadge) quizModeBadge.textContent = badgeText;
        startTimer();
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex >= selectedQuestions.length) {
            finishQuiz();
            return;
        }

        isAnswered = false;
        const q = selectedQuestions[currentQuestionIndex];

        // Clear previous explanation
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();

        questionNumber.textContent = `Câu ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
        const percent = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
        progressBarFill.style.width = `${percent}%`;

        questionText.textContent = cleanDisplayText(q.text);
        renderMath(questionText);

        if (q.code && q.code.trim()) {
            questionCode.textContent = q.code;
            codeBlockWrapper.classList.remove('hidden');
        } else {
            codeBlockWrapper.classList.add('hidden');
            questionCode.textContent = '';
        }

        optionsContainer.innerHTML = '';
        nextBtn.classList.add('hidden');

        // Render EXACT .option markup from style.css
        q.options.forEach((optText, optIdx) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = `<div class="option-indicator"></div><span class="option-text"></span>`;
            const textSpan = div.querySelector('.option-text');
            textSpan.textContent = cleanDisplayText(optText);
            div.dataset.index = optIdx;
            div.addEventListener('click', () => selectOption(optIdx, div));
            optionsContainer.appendChild(div);
        });

        renderMath(optionsContainer);
    }

    function selectOption(selectedIdx, optionDiv) {
        if (isAnswered) return;
        isAnswered = true;

        const q = selectedQuestions[currentQuestionIndex];
        const isCorrect = selectedIdx === q.correct;
        const allOptions = optionsContainer.querySelectorAll('.option');

        allOptions.forEach(opt => opt.style.pointerEvents = 'none');

        if (isCorrect) {
            score++;
            optionDiv.classList.add('correct');
            showToast('Chính xác! ✓', 'success');
        } else {
            optionDiv.classList.add('wrong');
            if (allOptions[q.correct]) {
                allOptions[q.correct].classList.add('correct');
            }
            showToast('Sai rồi! ✗', 'error');
        }

        currentAnswerRecords.push({
            question: q,
            selectedIdx,
            isCorrect
        });

        // Show explanation if available
        if (q.explanation && q.explanation.trim()) {
            const exp = document.createElement('div');
            exp.className = 'explanation';
            exp.innerHTML = `<strong>💡 Giải thích:</strong> <span class="exp-text"></span>`;
            exp.querySelector('.exp-text').textContent = cleanDisplayText(q.explanation);
            optionsContainer.parentElement.appendChild(exp);
            renderMath(exp);
        }

        nextBtn.classList.remove('hidden');
    }

    nextBtn.addEventListener('click', () => {
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();
        currentQuestionIndex++;
        displayQuestion();
    });

    quizBackBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn thoát bài làm hiện tại không?')) {
            exitQuiz();
        }
    });

    function exitQuiz() {
        stopTimer();
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        tabNav.classList.remove('hidden');
        switchTab(activeTab);
    }

    function finishQuiz() {
        stopTimer();
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();

        progressBarFill.style.width = '100%';
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');

        const total = selectedQuestions.length;
        const percentage = Math.round((score / total) * 100);

        scoreText.textContent = `${percentage}%`;
        scoreCircleFill.setAttribute('stroke-dasharray', `${percentage}, 100`);

        correctCountEl.textContent = score;
        wrongCountEl.textContent = total - score;

        if (currentQuizSourceName === 'basic') {
            roundStat.classList.remove('hidden');
            const roundRes = document.getElementById('round-result');
            if (roundRes) roundRes.textContent = `${currentRound}/3`;

            const currentWrong = currentAnswerRecords.filter(r => !r.isCorrect).map(r => r.question.id);
            const currentRight = currentAnswerRecords.filter(r => r.isCorrect).map(r => r.question.id);

            wrongQuestionIds = Array.from(new Set([...wrongQuestionIds, ...currentWrong]));
            correctQuestionIds = Array.from(new Set([...correctQuestionIds, ...currentRight]));

            if (wrongReviewCount) wrongReviewCount.textContent = currentWrong.length;
            reviewInfoDiv.classList.remove('hidden');

            if (currentRound < 3) {
                currentRound++;
            } else {
                currentRound = 1;
                wrongQuestionIds = [];
                correctQuestionIds = [];
            }
            saveSmartState();
            updateRoundUI();
        } else {
            roundStat.classList.add('hidden');
            reviewInfoDiv.classList.add('hidden');
        }

        renderReviewList();
        renderResultButtons();
        saveQuizHistory();
    }

    function renderReviewList() {
        reviewList.innerHTML = '';
        reviewSummary.textContent = `${score}/${selectedQuestions.length} câu đúng`;

        currentAnswerRecords.forEach((record, idx) => {
            const item = document.createElement('div');
            item.className = `review-item ${record.isCorrect ? 'correct' : 'wrong'}`;

            let html = `
                <div class="review-header">
                    <span class="review-status">${record.isCorrect ? '✓ Đúng' : '✗ Sai'}</span>
                    <span class="review-qnum">Câu ${idx + 1} (${record.question.topic || 'Chung'})</span>
                </div>
                <div class="review-question">${cleanDisplayText(record.question.text)}</div>
            `;

            if (record.question.code) {
                html += `<pre class="review-code"><code>${cleanDisplayText(record.question.code)}</code></pre>`;
            }

            html += `<div class="review-answers">`;
            record.question.options.forEach((opt, optIdx) => {
                let badge = '';
                if (optIdx === record.question.correct) badge = ' (Đáp án đúng)';
                if (optIdx === record.selectedIdx && !record.isCorrect) badge = ' (Bạn đã chọn)';
                html += `<div class="review-opt ${optIdx === record.question.correct ? 'opt-correct' : (optIdx === record.selectedIdx ? 'opt-chosen' : '')}">
                    ${String.fromCharCode(65 + optIdx)}. ${cleanDisplayText(opt)}${badge}
                </div>`;
            });
            html += `</div>`;

            if (record.question.explanation) {
                html += `<div class="review-explanation"><strong>Giải thích:</strong> ${cleanDisplayText(record.question.explanation)}</div>`;
            }

            item.innerHTML = html;
            reviewList.appendChild(item);
        });
        renderMath(reviewList);
    }

    function renderResultButtons() {
        resultButtons.innerHTML = '';

        const retryBtn = document.createElement('button');
        retryBtn.className = 'primary-btn';
        retryBtn.textContent = '🔄 Làm lại bài này';
        retryBtn.addEventListener('click', () => {
            startQuiz([...selectedQuestions], currentQuizBadgeText, currentQuizSourceName);
        });

        const backBtn = document.createElement('button');
        backBtn.className = 'secondary-btn';
        backBtn.textContent = '🏠 Quay về trang chủ';
        backBtn.addEventListener('click', () => {
            exitQuiz();
        });

        resultButtons.appendChild(retryBtn);
        resultButtons.appendChild(backBtn);
    }

    // ===== TIMER & TOAST =====
    function startTimer() {
        stopTimer();
        secondsElapsed = 0;
        updateTimerDisplay();
        timer = setInterval(() => {
            secondsElapsed++;
            updateTimerDisplay();
        }, 1000);
    }

    function stopTimer() {
        if (timer) clearInterval(timer);
    }

    function updateTimerDisplay() {
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    }

    function showToast(msg, type) {
        const toast = document.createElement('div');
        toast.innerText = msg;
        const bgs = {
            success: 'linear-gradient(135deg, #22c55e, #16a34a)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            info: 'linear-gradient(135deg, #6366f1, #4f46e5)'
        };
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%) translateY(20px)',
            padding: '12px 24px',
            borderRadius: '12px',
            color: 'white',
            background: bgs[type] || bgs.info,
            boxShadow: '0 10px 25px -3px rgba(0,0,0,0.4)',
            zIndex: 1000,
            opacity: 0,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            pointerEvents: 'none',
            fontSize: '0.95rem',
            fontWeight: '600'
        });
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 1800);
    }

    // ===== HISTORY =====
    function saveQuizHistory() {
        const history = getQuizHistory();
        const entry = {
            id: Date.now(),
            date: new Date().toLocaleString('vi-VN'),
            title: currentQuizBadgeText || 'Bài trắc nghiệm',
            score,
            total: selectedQuestions.length,
            records: currentAnswerRecords.map(r => ({
                questionText: r.question.text,
                isCorrect: r.isCorrect,
                correctOpt: r.question.options[r.question.correct],
                selectedOpt: r.question.options[r.selectedIdx] || ''
            }))
        };
        history.unshift(entry);
        if (history.length > 20) history.pop();
        localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history));
        renderQuizHistory();
    }

    function getQuizHistory() {
        try {
            return JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY)) || [];
        } catch {
            return [];
        }
    }

    function renderQuizHistory() {
        if (!historyList) return;
        const history = getQuizHistory();
        if (!history.length) {
            historyList.innerHTML = '<p class="empty-history">Chưa có lịch sử làm bài</p>';
            return;
        }

        historyList.innerHTML = '';
        history.forEach(item => {
            const card = document.createElement('div');
            card.className = 'history-item';
            const pct = Math.round((item.score / item.total) * 100);
            card.innerHTML = `
                <div class="history-item-top">
                    <span class="history-title">${cleanDisplayText(item.title)}</span>
                    <span class="history-score ${pct >= 50 ? 'pos' : 'neg'}">${item.score}/${item.total} (${pct}%)</span>
                </div>
                <div class="history-date">${item.date}</div>
            `;
            card.addEventListener('click', () => showHistoryDetail(item));
            historyList.appendChild(card);
        });
    }

    function showHistoryDetail(item) {
        if (!historyModal) return;
        historyModalTitle.textContent = item.title;
        historyModalSummary.textContent = `${item.score}/${item.total} câu đúng • ${item.date}`;
        historyModalList.innerHTML = '';

        item.records.forEach((r, idx) => {
            const el = document.createElement('div');
            el.className = `review-item ${r.isCorrect ? 'correct' : 'wrong'}`;
            el.innerHTML = `
                <div class="review-header">
                    <span class="review-status">${r.isCorrect ? '✓ Đúng' : '✗ Sai'}</span>
                    <span class="review-qnum">Câu ${idx + 1}</span>
                </div>
                <div class="review-question">${cleanDisplayText(r.questionText)}</div>
                <div class="review-answers">
                    ${r.isCorrect ? '' : `<div class="review-opt opt-chosen">Bạn chọn: ${cleanDisplayText(r.selectedOpt)}</div>`}
                    <div class="review-opt opt-correct">Đáp án đúng: ${cleanDisplayText(r.correctOpt)}</div>
                </div>
            `;
            historyModalList.appendChild(el);
        });
        renderMath(historyModalList);

        historyModal.classList.remove('hidden');
    }

    if (historyModalClose) {
        historyModalClose.addEventListener('click', () => {
            historyModal.classList.add('hidden');
        });
    }

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            if (confirm('Bạn có chắc muốn xóa toàn bộ lịch sử làm bài?')) {
                localStorage.removeItem(QUIZ_HISTORY_KEY);
                renderQuizHistory();
            }
        });
    }

    // ===== BUTTON WIRING =====
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            currentQuizKey = 'basic';
            currentQuizSourceName = 'basic';
            currentQuizBadgeText = `Luyện tập - Lần ${currentRound}`;
            const questions = selectQuestionsForRound();
            startQuiz(questions, currentQuizBadgeText, 'basic');
        });
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            if (!allQuestions.length) {
                alert('Chưa có câu hỏi trong ngân hàng!');
                return;
            }
            currentQuizKey = 'random';
            currentQuizSourceName = 'random';
            currentQuizBadgeText = 'Đề ngẫu nhiên (30 câu)';
            const questions = shuffleArray([...allQuestions]).slice(0, QUESTIONS_PER_EXAM);
            startQuiz(questions, currentQuizBadgeText, 'random');
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Bạn có muốn reset tiến trình về Lần 1?')) {
                resetSmartState();
            }
        });
    }

    if (midtermStartBtn) {
        midtermStartBtn.addEventListener('click', () => {
            const list = midtermQuestions.length ? midtermQuestions : allQuestions;
            if (!list.length) {
                alert('Chưa có câu hỏi ôn giữa kỳ!');
                return;
            }
            currentQuizKey = 'midterm';
            currentQuizSourceName = 'midterm';
            currentQuizBadgeText = 'Ôn thi Giữa kỳ (Toàn bộ)';
            startQuiz([...list], currentQuizBadgeText, 'midterm');
        });
    }

    if (midtermRandomBtn) {
        midtermRandomBtn.addEventListener('click', () => {
            const list = midtermQuestions.length ? midtermQuestions : allQuestions;
            if (!list.length) {
                alert('Chưa có câu hỏi ôn giữa kỳ!');
                return;
            }
            currentQuizKey = 'midterm_random';
            currentQuizSourceName = 'midterm';
            currentQuizBadgeText = 'Đề thi Giữa kỳ ngẫu nhiên (30 câu)';
            const sample = shuffleArray([...list]).slice(0, Math.min(30, list.length));
            startQuiz(sample, currentQuizBadgeText, 'midterm');
        });
    }

    if (finalStartBtn) {
        finalStartBtn.addEventListener('click', () => {
            if (!finalQuestions.length) {
                alert('Chưa có câu hỏi ôn cuối kỳ!');
                return;
            }
            currentQuizKey = 'final';
            currentQuizSourceName = 'final';
            currentQuizBadgeText = 'Ôn thi Cuối kỳ';
            startQuiz([...finalQuestions], currentQuizBadgeText, 'final');
        });
    }

    // ===== UTILITY =====
    function shuffleArray(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function cleanDisplayText(text) {
        return String(text || '')
            .replace(/^-\s*\[[ x]\]\s*/gm, '')
            .replace(/```[a-zA-Z0-9_-]*\n?/g, '')
            .replace(/```/g, '')
            .replace(/`([^`\n]+)`/g, '$1')
            .trim();
    }

    // ===== INITIALIZATION =====
    loadQuestions();
    loadSmartState();
    updateRoundUI();
    buildTopicUI('topics-container', allQuestions);
    buildMidtermTopicUI('midterm-topics-container', midtermQuestions.length ? midtermQuestions : allQuestions);
    syncTabFromHash();
    if (buildCodeEl) buildCodeEl.textContent = BUILD_CODE;
    renderQuizHistory();
});
