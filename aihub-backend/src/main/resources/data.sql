-- =============================================
-- AIHub Seed Data: Categories & 50+ AI Tools
-- Uses ON CONFLICT DO NOTHING to be idempotent
-- =============================================

-- =============================================
-- CATEGORIES
-- =============================================
INSERT INTO categories (id, name, icon) VALUES (1, 'Text Generation', '📝') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (2, 'Image Generation', '🎨') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (3, 'Code Assistant', '💻') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (4, 'Video Generation', '🎬') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (5, 'Audio & Music', '🎵') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (6, 'Chatbot', '🤖') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (7, 'Data Analysis', '📊') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (8, 'Productivity', '⚡') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (9, 'Design', '🖌️') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (10, 'Marketing', '📈') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (11, 'Research', '🔬') ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, icon) VALUES (12, 'Education', '🎓') ON CONFLICT (id) DO NOTHING;

-- Reset sequence to avoid conflicts
SELECT setval('categories_id_seq', (SELECT COALESCE(MAX(id), 0) FROM categories));

-- =============================================
-- AI TOOLS (50+)
-- =============================================

-- TEXT GENERATION (Category 1)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (1, 'ChatGPT', 'Advanced conversational AI by OpenAI, capable of generating human-like text, answering questions, writing code, and creative content across multiple domains.', 1, 'https://chat.openai.com', 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', 'FREEMIUM', 4.8, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (2, 'Claude', 'Anthropic''s AI assistant known for safety, helpfulness, and nuanced reasoning. Excels at long-form content, analysis, and coding tasks.', 1, 'https://claude.ai', 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg', 'FREEMIUM', 4.7, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (3, 'Gemini', 'Google''s multimodal AI model offering advanced text generation, reasoning, and integration with Google services.', 1, 'https://gemini.google.com', 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', 'FREEMIUM', 4.6, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (4, 'Jasper', 'AI content platform designed for enterprise marketing teams to produce on-brand content at scale across campaigns and channels.', 1, 'https://www.jasper.ai', 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b8635e0c30e16_Jasper%20Logo.svg', 'PAID', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (5, 'Copy.ai', 'AI-powered writing assistant that generates high-quality marketing copy, blog posts, product descriptions, and social media content.', 1, 'https://www.copy.ai', 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e8464e30a3700_CopyAI-Logo.svg', 'FREEMIUM', 4.3, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- IMAGE GENERATION (Category 2)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (6, 'Midjourney', 'Leading AI image generation tool creating stunning, artistic visuals from text prompts. Known for photorealistic and creative output quality.', 2, 'https://www.midjourney.com', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png', 'PAID', 4.9, false, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (7, 'DALL·E 3', 'OpenAI''s image generation model that creates detailed, accurate images from natural language descriptions with impressive coherence.', 2, 'https://openai.com/dall-e-3', 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', 'FREEMIUM', 4.7, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (8, 'Stable Diffusion', 'Open-source text-to-image model offering high customization, local deployment, and fine-tuning capabilities for developers and artists.', 2, 'https://stability.ai', 'https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/8089b0d3-d6de-451a-99a3-e5a44bcbb52b/stability-ai-logo.png', 'FREE', 4.5, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (9, 'Leonardo AI', 'AI-powered creative platform offering image generation, fine-tuned models, and creative tools for game assets, concept art, and design.', 2, 'https://leonardo.ai', 'https://leonardo.ai/img/leonardo-logo.svg', 'FREEMIUM', 4.5, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (10, 'Adobe Firefly', 'Adobe''s generative AI integrated into Creative Cloud, designed for safe commercial use with training on licensed content.', 2, 'https://firefly.adobe.com', 'https://www.adobe.com/content/dam/shared/images/product-icons/svg/firefly.svg', 'FREEMIUM', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- CODE ASSISTANT (Category 3)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (11, 'GitHub Copilot', 'AI pair programmer by GitHub and OpenAI offering real-time code suggestions, multi-language support, and deep IDE integration.', 3, 'https://github.com/features/copilot', 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png', 'PAID', 4.8, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (12, 'Cursor', 'AI-first code editor built on VS Code that integrates large language models for intelligent code completion, editing, and debugging.', 3, 'https://cursor.sh', 'https://cursor.sh/brand/icon.svg', 'FREEMIUM', 4.7, false, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (13, 'Tabnine', 'AI coding assistant providing whole-line and full-function completions, trained on permissive code with enterprise-grade privacy.', 3, 'https://www.tabnine.com', 'https://www.tabnine.com/wp-content/uploads/2021/10/tabnine-logo.svg', 'FREEMIUM', 4.3, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (14, 'Replit AI', 'Integrated AI assistant in Replit''s browser-based IDE, offering code generation, explanation, debugging, and collaboration features.', 3, 'https://replit.com', 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Replit_Logo.svg', 'FREEMIUM', 4.2, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (15, 'Codeium', 'Free AI-powered code completion tool supporting 70+ languages with fast suggestions and zero data retention policies.', 3, 'https://codeium.com', 'https://codeium.com/logo.png', 'FREE', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- VIDEO GENERATION (Category 4)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (16, 'Runway ML', 'Creative AI suite for video generation and editing, featuring Gen-2 text-to-video, image-to-video, and advanced editing tools.', 4, 'https://runwayml.com', 'https://runwayml.com/images/runway-logo.svg', 'FREEMIUM', 4.6, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (17, 'Synthesia', 'AI video creation platform generating professional videos with AI avatars, supporting 120+ languages for training and marketing.', 4, 'https://www.synthesia.io', 'https://www.synthesia.io/hubfs/synthesia-logo.svg', 'PAID', 4.5, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (18, 'Pika', 'Text-to-video AI tool creating and editing videos with cinematic quality from simple text prompts and images.', 4, 'https://pika.art', 'https://pika.art/favicon.ico', 'FREEMIUM', 4.3, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (19, 'HeyGen', 'AI video generation platform creating spokesperson videos with customizable avatars, voices, and multilingual support.', 4, 'https://www.heygen.com', 'https://www.heygen.com/logo.svg', 'FREEMIUM', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- AUDIO & MUSIC (Category 5)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (20, 'ElevenLabs', 'State-of-the-art AI voice synthesis platform offering realistic text-to-speech, voice cloning, and dubbing in 29 languages.', 5, 'https://elevenlabs.io', 'https://elevenlabs.io/favicon.ico', 'FREEMIUM', 4.8, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (21, 'Suno', 'AI music generation platform that creates full songs with vocals, instrumentation, and lyrics from simple text prompts.', 5, 'https://suno.com', 'https://suno.com/favicon.ico', 'FREEMIUM', 4.6, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (22, 'Murf AI', 'AI voice generator for creating studio-quality voiceovers for videos, presentations, and podcasts with 120+ realistic voices.', 5, 'https://murf.ai', 'https://murf.ai/favicon.ico', 'FREEMIUM', 4.3, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (23, 'AIVA', 'AI music composer that generates original soundtracks and background music for films, games, commercials, and personal projects.', 5, 'https://www.aiva.ai', 'https://www.aiva.ai/favicon.ico', 'FREEMIUM', 4.2, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- CHATBOT (Category 6)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (24, 'Perplexity AI', 'AI-powered search engine that provides accurate, cited answers by combining LLMs with real-time web search capabilities.', 6, 'https://www.perplexity.ai', 'https://www.perplexity.ai/favicon.ico', 'FREEMIUM', 4.7, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (25, 'Character.ai', 'Platform for creating and chatting with AI characters, featuring diverse personalities for entertainment, roleplay, and learning.', 6, 'https://character.ai', 'https://character.ai/favicon.ico', 'FREEMIUM', 4.4, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (26, 'Poe', 'Quora''s AI chat aggregator providing access to multiple AI models including GPT-4, Claude, and custom bots in one interface.', 6, 'https://poe.com', 'https://poe.com/favicon.ico', 'FREEMIUM', 4.3, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (27, 'Pi', 'Inflection AI''s personal intelligence assistant focused on emotional support, thoughtful conversation, and everyday help.', 6, 'https://pi.ai', 'https://pi.ai/favicon.ico', 'FREE', 4.1, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

-- DATA ANALYSIS (Category 7)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (28, 'Julius AI', 'AI-powered data analysis platform that interprets data, creates visualizations, and generates insights from uploaded datasets.', 7, 'https://julius.ai', 'https://julius.ai/favicon.ico', 'FREEMIUM', 4.5, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (29, 'Akkio', 'No-code AI platform enabling businesses to build predictive models, analyze data, and automate reporting without technical expertise.', 7, 'https://www.akkio.com', 'https://www.akkio.com/favicon.ico', 'PAID', 4.3, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (30, 'Obviously AI', 'No-code machine learning platform enabling users to build, deploy, and explain predictive models from their data in minutes.', 7, 'https://www.obviously.ai', 'https://www.obviously.ai/favicon.ico', 'PAID', 4.1, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (31, 'Polymer', 'AI-powered business intelligence tool that automatically transforms spreadsheet data into interactive dashboards and insights.', 7, 'https://www.polymersearch.com', 'https://www.polymersearch.com/favicon.ico', 'FREEMIUM', 4.2, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- PRODUCTIVITY (Category 8)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (32, 'Notion AI', 'AI writing and productivity assistant integrated into Notion, offering text generation, summarization, and task management assistance.', 8, 'https://www.notion.so/product/ai', 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg', 'PAID', 4.6, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (33, 'Otter.ai', 'AI meeting assistant that records, transcribes, and summarizes meetings in real-time with speaker identification.', 8, 'https://otter.ai', 'https://otter.ai/favicon.ico', 'FREEMIUM', 4.5, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (34, 'Grammarly', 'AI-powered writing assistant that checks grammar, spelling, tone, and clarity with real-time suggestions across platforms.', 8, 'https://www.grammarly.com', 'https://static.grammarly.com/assets/files/favicon-32x32.png', 'FREEMIUM', 4.7, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (35, 'Mem', 'AI-powered knowledge base and note-taking tool that self-organizes information and surfaces relevant notes automatically.', 8, 'https://mem.ai', 'https://mem.ai/favicon.ico', 'FREEMIUM', 4.2, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (36, 'Reclaim.ai', 'AI scheduling assistant that automatically finds the best time for tasks, meetings, habits, and breaks in your calendar.', 8, 'https://reclaim.ai', 'https://reclaim.ai/favicon.ico', 'FREEMIUM', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- DESIGN (Category 9)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (37, 'Canva AI', 'AI-powered design platform with Magic Write, Magic Design, text-to-image, and background removal tools for everyone.', 9, 'https://www.canva.com', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg', 'FREEMIUM', 4.7, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (38, 'Figma AI', 'AI-powered design features in Figma including auto-layout suggestions, design generation, and intelligent component creation.', 9, 'https://www.figma.com', 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', 'FREEMIUM', 4.6, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (39, 'Looka', 'AI logo and brand identity maker that generates professional logos, color palettes, and brand kits from simple prompts.', 9, 'https://looka.com', 'https://looka.com/favicon.ico', 'PAID', 4.2, false, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (40, 'Uizard', 'AI-powered UI/UX design tool that converts sketches, screenshots, and text into editable digital designs and prototypes.', 9, 'https://uizard.io', 'https://uizard.io/favicon.ico', 'FREEMIUM', 4.3, false, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- MARKETING (Category 10)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (41, 'HubSpot AI', 'AI-powered CRM and marketing automation tools for content creation, email optimization, chatbots, and predictive analytics.', 10, 'https://www.hubspot.com', 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png', 'FREEMIUM', 4.5, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (42, 'Surfer SEO', 'AI-powered SEO tool that analyzes top-ranking content and provides data-driven recommendations to optimize content for search engines.', 10, 'https://surferseo.com', 'https://surferseo.com/favicon.ico', 'PAID', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (43, 'Writesonic', 'AI writing platform for creating SEO-optimized blog posts, marketing copy, ads, and landing pages with brand voice customization.', 10, 'https://writesonic.com', 'https://writesonic.com/favicon.ico', 'FREEMIUM', 4.3, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (44, 'AdCreative.ai', 'AI platform generating high-performing ad creatives, banners, and social media posts using predictive scoring technology.', 10, 'https://www.adcreative.ai', 'https://www.adcreative.ai/favicon.ico', 'PAID', 4.2, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- RESEARCH (Category 11)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (45, 'Elicit', 'AI research assistant that automates literature reviews, finds relevant papers, extracts key findings, and synthesizes research.', 11, 'https://elicit.com', 'https://elicit.com/favicon.ico', 'FREEMIUM', 4.5, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (46, 'Consensus', 'AI-powered academic search engine that finds and summarizes scientific research papers to answer questions with evidence.', 11, 'https://consensus.app', 'https://consensus.app/favicon.ico', 'FREEMIUM', 4.4, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (47, 'Semantic Scholar', 'AI-powered research tool by Allen Institute that helps find relevant academic papers with smart citations and recommendations.', 11, 'https://www.semanticscholar.org', 'https://www.semanticscholar.org/favicon.ico', 'FREE', 4.6, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (48, 'Scite.ai', 'AI citation analysis platform that shows how scientific claims have been cited — supported, contradicted, or mentioned.', 11, 'https://scite.ai', 'https://scite.ai/favicon.ico', 'PAID', 4.3, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- EDUCATION (Category 12)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (49, 'Khan Academy Khanmigo', 'AI tutor by Khan Academy powered by GPT-4, offering personalized tutoring, Socratic-method guidance, and learning assessment.', 12, 'https://www.khanacademy.org/khan-labs', 'https://cdn.kastatic.org/images/khan-logo-dark-background-2.png', 'FREEMIUM', 4.6, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (50, 'Duolingo Max', 'AI-enhanced language learning with GPT-4 powered features like Explain My Answer and Roleplay for immersive practice.', 12, 'https://www.duolingo.com', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Duolingo_logo.svg', 'PAID', 4.5, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (51, 'Quizlet AI', 'AI-powered study platform that creates flashcards, practice tests, and personalized study plans from user content.', 12, 'https://quizlet.com', 'https://quizlet.com/favicon.ico', 'FREEMIUM', 4.4, true, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (52, 'Photomath', 'AI math solver that scans and solves math problems step-by-step with detailed explanations for students.', 12, 'https://photomath.com', 'https://photomath.com/favicon.ico', 'FREEMIUM', 4.5, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

-- ADDITIONAL TOOLS (Mixed Categories for 50+)
INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (53, 'Lovable', 'AI-powered full-stack web app builder that converts natural language prompts into production-ready applications with clean code.', 3, 'https://lovable.dev', 'https://lovable.dev/favicon.ico', 'FREEMIUM', 4.5, false, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (54, 'v0 by Vercel', 'AI-powered UI generation tool by Vercel that creates React components and full pages from text descriptions using shadcn/ui.', 3, 'https://v0.dev', 'https://v0.dev/favicon.ico', 'FREEMIUM', 4.6, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (55, 'Descript', 'AI-powered video and podcast editing platform with text-based editing, AI voice cloning, and automatic transcription.', 4, 'https://www.descript.com', 'https://www.descript.com/favicon.ico', 'FREEMIUM', 4.5, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (56, 'Lumen5', 'AI video creation platform that transforms blog posts and text content into engaging videos with smart media selection.', 4, 'https://lumen5.com', 'https://lumen5.com/favicon.ico', 'FREEMIUM', 4.2, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (57, 'Whisper', 'OpenAI''s open-source speech recognition model offering accurate, multilingual transcription and translation capabilities.', 5, 'https://openai.com/research/whisper', 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', 'FREE', 4.7, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (58, 'Tome', 'AI-powered storytelling and presentation tool that generates professional decks with rich formatting from simple prompts.', 8, 'https://tome.app', 'https://tome.app/favicon.ico', 'FREEMIUM', 4.3, false, true, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (59, 'Beautiful.ai', 'AI presentation maker that automatically designs slides as you add content, with smart templates and professional formatting.', 8, 'https://www.beautiful.ai', 'https://www.beautiful.ai/favicon.ico', 'PAID', 4.2, false, false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO ai_tools (id, name, description, category_id, website_url, logo_url, pricing_type, rating, api_supported, mobile_supported, created_at)
VALUES (60, 'Pictory', 'AI video creation tool that converts long-form content into short, shareable branded videos with automatic highlights.', 10, 'https://pictory.ai', 'https://pictory.ai/favicon.ico', 'PAID', 4.1, true, false, NOW())
ON CONFLICT (id) DO NOTHING;

-- Reset ai_tools sequence
SELECT setval('ai_tools_id_seq', (SELECT COALESCE(MAX(id), 0) FROM ai_tools));
