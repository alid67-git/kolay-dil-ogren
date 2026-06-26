#!/usr/bin/env node
/**
 * Tayca uygulaması — Tayca (th) arayüz çevirileri
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const fp = path.join(root, 'tayca-v3.html');
let html = fs.readFileSync(fp, 'utf8');

// ── loc() helper ──
if (!html.includes('function loc(')) {
  html = html.replace(
    'function uiB(en, tr){ return appLang===\'tr\' ? tr : en; }',
    `function uiB(en, tr){ return appLang==='tr' ? tr : en; }
function loc(tr, en, th){ return appLang==='tr' ? tr : (appLang==='th' ? (th||en) : en); }`
  );
}

// ── lessonSubtitle: title_th desteği ──
html = html.replace(
  /function lessonSubtitle\(meta\)\{\s*if\(!meta\) return '';\s*const sub = appLang!==['"]tr['"] \? \(meta\.subtitle_en\|\|meta\.subtitle\) : \(meta\.subtitle\|\|meta\.subtitle_en\);\s*if\(sub\) return sub;\s*return appLang!==['"]tr['"] \? \(meta\.title_en\|\|meta\.title\|\|''\) : \(meta\.title\|\|meta\.title_en\|\|''\);\s*\}/,
  `function lessonSubtitle(meta){
  if(!meta) return '';
  if(appLang==='th' && meta.title_th) return meta.title_th;
  const sub = appLang!=='tr' ? (meta.subtitle_en||meta.subtitle) : (meta.subtitle||meta.subtitle_en);
  if(sub) return sub;
  if(appLang==='th') return meta.title_th||meta.title_en||meta.title||'';
  return appLang!=='tr' ? (meta.title_en||meta.title||'') : (meta.title||meta.title_en||'');
}`
);

// ── Lf: KDO_Lf kullan ──
html = html.replace(
  /function Lf\(item,field\)\{\s*if\(!item\) return '';\s*if\(typeof KDO_Lf==='function'\) return KDO_Lf\(item,field,appLang\);\s*if\(appLang!==['"]tr['"]&&item\[field\+['"]_en['"]\]!==undefined\) return item\[field\+['"]_en['"]\];\s*return item\[field\]\|\|'';\s*\}/,
  `function Lf(item,field){
  if(!item) return '';
  if(typeof KDO_Lf==='function') return KDO_Lf(item,field,appLang);
  if(appLang==='th'&&item[field+'_th']!==undefined) return item[field+'_th'];
  if(appLang!=='tr'&&item[field+'_en']!==undefined) return item[field+'_en'];
  return item[field]||'';
}`
);

// ── title_th ekle (LESSONS_META) ──
const titleTh = {
  1:'ทักทายและพื้นฐาน', 2:'ตัวเลขและเงิน', 3:'วันที่และเวลา', 4:'ร้านอาหาร',
  5:'ตลาดและช้อปปิ้ง', 6:'การบอกทาง', 7:'Grab และการเดินทาง', 8:'โรงแรมและที่พัก',
  9:'มอเตอร์ไซค์และจราจร', 10:'ชายหาดและทะเล', 11:'โรงพยาบาลและร้านขายยา', 12:'สถานการณ์ฉุกเฉิน',
  13:'ชีวิตที่บ้านและอินเทอร์เน็ต', 14:'การเข้าสังคม', 15:'ตรวจคนเข้าเมืองและเรื่องราชการ', 16:'วัฒนธรรมไทย',
  17:'อ่านป้ายและเมนู', 18:'LINE และโทรศัพท์', 19:'จำลองวันเต็มที่ภูเก็ต',
  20:'คำศัพท์ 1 — สำนวนพื้นฐานและทักทาย', 21:'คำศัพท์ 2 — อาชีพและส่วนต่างๆ ของร่างกาย',
  22:'คำศัพท์ 3 — อารมณ์ เสื้อผ้าและการกระทำ', 23:'คำศัพท์ 4 — สิ่งของประจำวันและตัวเลข',
  24:'คำศัพท์ 5 — ธุรกิจและเทคโนโลยี', 25:'คำศัพท์ 6 — การศึกษาและศิลปะ',
  26:'คำศัพท์ 7 —เลขลำดับและอารมณ์', 27:'คำศัพท์ 8 — สภาพอากาศและกีฬา',
  28:'คำศัพท์ 9 — เงินและร้านอาหาร', 29:'คำศัพท์ 10 — ประเทศและเมือง',
  30:'คำศัพท์ 11 — โรงแรมและสี', 31:'คำศัพท์ 12 — ผลไม้ ผักและคำคุณศัพท์',
  32:'คำศัพท์ 13 — อาชีพและเครื่องดนตรี', 33:'คำศัพท์ 14 — กีฬาและการเดินทาง',
  34:'คำศัพท์ 15 — ประชุมธุรกิจและการเจรจา', 35:'คำศัพท์ 16 — เสื้อผ้าและเครื่องสำอาง',
  36:'คำศัพท์ 17 — คำถามและคุณสมบัติ', 37:'คำศัพท์ 18 — สภาพอากาศและธรรมชาติ',
  38:'คำศัพท์ 19 — อาหารและครัว', 39:'คำศัพท์ 20 — รูปลักษณ์และร่างกาย',
  40:'คำศัพท์ 21 — สุขภาพและเฟอร์นิเจอร์', 41:'คำศัพท์ 22 — เมืองและอาคาร',
  42:'คำศัพท์ 23 — เศรษฐกิจและเทคโนโลยี', 43:'คำศัพท์ 24 — บ้านและชีวิตในโรงเรียน',
  44:'คำศัพท์ 25 — การเดินทางและการสื่อสาร', 45:'คำศัพท์ 26 — การกระทำและกิจกรรม',
  46:'คำศัพท์ 27 — จราจร สัตว์และธรรมชาติ', 47:'คำศัพท์ 28 — การเดินทางและสื่อ',
  48:'คำศัพท์ 29 — ภาษาและคำศัพท์เบ็ดเตล็ด'
};

for (const [num, thTitle] of Object.entries(titleTh)) {
  const re = new RegExp(`(\\{num:${num},[^}]+title_en:'[^']+')(, hasContent)`);
  if (re.test(html) && !html.includes(`num:${num},`) || !html.match(new RegExp(`num:${num}[^}]*title_th`))) {
    html = html.replace(re, `$1, title_th:'${thTitle}'$2`);
  }
}

// ── UI_LOCAL.th tam blok ──
const UI_TH = {
  nav_lessons:'📚 บทเรียน', nav_test:'📝 ทดสอบ', nav_translate:'🌐 แปล', nav_list:'📋 รายการโปรด', nav_review:'🔄 ทบทวน', nav_add:'➕ เพิ่ม',
  tab_words:'คำศัพท์', tab_tones:'วรรณยุกต์', tab_grammar:'ไวยากรณ์', tab_speaking:'การพูด', tab_dialogue:'บทสนทนา', tab_listening:'การฟัง',
  tab_quiz:'ควิซ', tab_practice:'ฝึกฝน', tab_numbers:'ตัวเลข', tab_calc:'เครื่องคิดเลข',
  practice_intro:'แบบฝึกคำศัพท์และประโยคในโหมดฝึกฝนแบบรวดเร็ว', practice_start:'เริ่มฝึกฝน',
  lesson_back:'← บทเรียน', lesson_back_list:'กลับไปรายการบทเรียน', lesson_done_msg:'คุณเรียนบทเรียนนี้เสร็จแล้ว!',
  lesson_redo_hint:'หากต้องการสามารถรีเซ็ตได้', lesson_unmark:'↺ ทำเครื่องหมายว่ายังไม่เสร็จ',
  lesson_mark_done:'✅ ทำเครื่องหมายว่าเสร็จแล้ว', lesson_all_visited:'✅ ทุกแท็บเสร็จสมบูรณ์!',
  lesson_visit_all:'⚠️ ต้องเยี่ยมชมทุกแท็บก่อนจึงจะทำบทเรียนให้เสร็จได้', lesson_all_done_q:'✅ เยี่ยมชมทุกแท็บแล้ว — พร้อมทำเสร็จหรือยัง?',
  lesson_complete_btn_active:'ทุกแท็บเสร็จสมบูรณ์!', lesson_tab_dbl:'ดับเบิลคลิก: ทำเครื่องหมาย / ยกเลิกแท็บ',
  tones_ref:'ข้อมูลวรรณยุกต์สำหรับบทเรียนนี้อยู่ในบทเรียนที่ 1', gram_tip_label:'เคล็ดลับ:',
  speak_listen:'🔊 ฟัง', speak_slow:'🐢 ช้า', dial_play:'▶ เล่นทั้งหมด', dial_stop:'⏹ หยุด',
  listen_play_btn:'🔊 ฟังเสียง', listen_easy:'⭐ ง่าย', listen_medium:'⭐⭐ ปานกลาง', listen_hard:'⭐⭐⭐ ยาก',
  test_loading:'⏳ กำลังโหลดข้อมูลบทเรียน...', test_single:'บทเรียนเดียว',
  test_single_desc:'ทดสอบคำศัพท์ ตัวอย่างและไวยากรณ์จากบทเรียนหนึ่งบท', test_all:'ทุกบทเรียน',
  test_all_desc_suffix:'กองการ์ด', test_starred:'รายการโปรด', test_starred_desc:'ทดสอบการ์ดที่คุณติดดาวไว้',
  test_select_lesson:'เลือกบทเรียน', test_lessons_done:'บทเรียนเสร็จแล้ว', test_cards_available:'การ์ดพร้อมใช้',
  test_back_btn:'← บทเรียน', test_back_menu:'← เมนูหลัก', test_back_geri:'← กลับ',
  test_show_answer:'แสดงคำตอบ', test_knew:'✅ รู้แล้ว', test_didnt_know:'❌ ไม่รู้',
  test_continue:'ต่อไป →', test_correct_fb:'✅ ถูกต้อง!', test_wrong_prefix:'❌ คำตอบ:',
  test_retry:'🔄 ลองอีกครั้ง', test_result_great:'ยอดเยี่ยม!', test_result_good:'ดี!',
  test_result_ok:'ไม่เลว!', test_result_keep:'ฝึกต่อไป!', test_correct_count:'ถูก',
  test_wrong_items:'🔁 พลาด — ทบทวนสิ่งเหล่านี้', test_mode_fc:'แฟลชการ์ด', test_mode_mc:'ตัวเลือกหลายข้อ', test_mode_mix:'ผสม',
  test_dir_th2tr:'ไทย → ความหมาย', test_dir_tr2th:'ความหมาย → ไทย', test_dir_mix:'ทิศทางผสม',
  test_cat_all:'ทั้งหมด', test_cat_phrases:'วลี', test_cat_grammar:'ไวยากรณ์', test_cat_pronouns:'สรรพนาม',
  test_start:'เริ่ม', test_no_cards:'ไม่พบการ์ด', test_type_word:'คำศัพท์', test_type_example:'ประโยคตัวอย่าง',
  test_type_dialogue:'บทสนทนา', test_type_speaking:'การพูด', test_type_grammar:'ไวยากรณ์',
  test_no_lessons:'ยังไม่มีบทเรียนที่เสร็จ', test_soru:'คำถาม',
  review_title:'🔄 ทบทวน (SRS)', review_total:'ทั้งหมด', review_learned:'เรียนแล้ว', review_due:'ครบกำหนดวันนี้',
  review_start:'เริ่มทบทวน', review_no_cards:'ไม่มีการ์ดที่ต้องทบทวนวันนี้', review_add_section:'📚 เพิ่มการ์ดบทเรียน',
  review_cards:'การ์ด', review_add_btn:'+ เพิ่ม', review_lesson_prefix:'บทเรียน',
  review_done_title:'เซสชันเสร็จสมบูรณ์!', review_done_sub:'การ์ดที่ทบทวนแล้ว',
  review_restart:'เริ่มใหม่', review_show_answer:'แสดงคำตอบ',
  review_q_th2tr:'🇹🇭 ไทย → ความหมาย', review_q_tr2th:'🇹🇷 ความหมาย → ไทย',
  review_btn_0:'❌ ไม่รู้', review_btn_1:'😰 ยาก', review_btn_2:'👍 ปกติ', review_btn_3:'⚡ ง่าย',
  review_type_word:'📚 คำศัพท์', review_type_example:'💬 ตัวอย่าง', review_type_speaking:'🗣️ การพูด',
  translate_btn:'แปล', translate_lesson_matches:'คู่บทเรียน', translate_no_match:'ไม่พบคู่',
  translate_google:'🌐 Google แปลภาษา', translate_claude:'🤖 Claude AI', translate_loading:'กำลังแปล...',
  list_title:'⭐ คำศัพท์ที่ติดดาวของฉัน', list_all:'ทั้งหมด', list_words:'คำศัพท์', list_examples:'ตัวอย่าง', list_dialogue:'บทสนทนา',
  list_empty:'⭐<br><br>ยังไม่มีคำศัพท์ที่ติดดาว', list_analysis:'📖 วิเคราะห์ประโยค',
  settings_title:'⚙️ การตั้งค่า', settings_lang:'🌐 ภาษาของแอป',
  settings_gist:'☁️ ซิงค์ข้ามอุปกรณ์ (GitHub Gist)', settings_push:'☁️ บันทึกไปคลาวด์', settings_pull:'📥 โหลดจากคลาวด์',
  settings_save:'บันทึก', settings_data:'ข้อมูล', settings_backup:'💾 สำรองข้อมูล',
  settings_voices:'🔊 เสียงไทย', settings_voices_loading:'กำลังโหลดเสียง...', settings_test_voice:'ทดสอบทั้งหมด',
  settings_api_key:'Anthropic API Key', settings_gist_ph:'ghp_... (ต้องมีสิทธิ์ gist)',
  alert_added:'การ์ดใหม่ถูกเพิ่ม!', alert_already:'การ์ดจากบทเรียนนี้ถูกเพิ่มแล้ว', alert_backup:'✅ คัดลอกข้อมูลแล้ว!',
  pron_title:'👤 สรรพนามบุรุษ — อ้างอิงด่วน', pron_col_person:'บุคคล', pron_col_thai:'ไทย', pron_col_roman:'การถอดเสียง', pron_col_note:'หมายเหตุ',
  pron_hint:'💡 ตัวอย่างเพิ่มเติม → แท็บไวยากรณ์ → กฎ 9',
  pron_i_m:'ฉัน (ช)', pron_i_f:'ฉัน (ญ)', pron_you:'คุณ', pron_he_she:'เขา', pron_we:'เรา', pron_you_pl:'พวกคุณ', pron_they:'พวกเขา',
  pron_male:'ชาย', pron_female:'หญิง', pron_polite:'สุภาพ ใช้ได้ทุกคน', pron_same_mf:'ใช้เหมือนกันทั้งชายและหญิง',
  pron_casual_i:'+ แบบไม่เป็นทางการ "ฉัน"', pron_group_addr:'การเรียกกลุ่ม', pron_phuak_group:'phuak=กลุ่ม',
  lesson_no_content:'เร็วๆ นี้',
  num_info:'ข้ามหลักที่เป็นศูนย์ 20 = yîi-sìp (พิเศษ!) 11 = sìp-èt แตะการ์ดเพื่อฟัง 🔊',
  num_compound_title:'🔗 ตัวอย่างตัวเลขประกอบ', num_compound_info:'เรียงจากหน่วยใหญ่ไปเล็ก ข้ามหลักที่เป็นศูนย์',
  calc_info:'ใส่ตัวเลขใดก็ได้ — ได้คำสะกดและการออกเสียงภาษาไทยทันที แตะ 🔊 เพื่อฟัง',
  calc_input_label:'ใส่ตัวเลข (0 – 9,999,999)', calc_listen:'🔊 ฟัง', calc_quick:'⚡ ตัวอย่างด่วน', calc_breakdown:'รายละเอียดหลัก',
  gram_modal_title:'📖 วิเคราะห์ประโยค', gram_legend_s:'S = ประธาน', gram_legend_v:'V = กริยา', gram_legend_o:'O = กรรม',
  gram_legend_q:'คำถาม / ปฏิเสธ', gram_legend_k:'K = คำขยาย', gram_btn_tip:'วิเคราะห์ไวยากรณ์',
  bonus_title:'BONUS — คำที่ใช้บ่อยที่สุด', bonus_words:'คำ', bonus_sets:'ชุด', bonus_done:'เสร็จแล้ว',
  quiz_q_suffix:'— หมายความว่าอะไร?', scroll_top:'เลื่อนขึ้นด้านบน', add_coming:'โมดูลเพิ่มคำศัพท์เร็วๆ นี้', gist_saved:'✅ บันทึกโทเค็นแล้ว',
  pron_col_english:'ไทย',
  ex_q_select:'เลือกคำตอบที่ถูกต้อง', ex_q_listen:'คุณได้ยินอะไร?', ex_q_translate:'แปลประโยคนี้',
  ex_q_wordbank:'แตะคำด้านล่างเพื่อสร้างคำตอบ', ex_play_slow:'ฟังช้า',
  ex_finish_title:'บทเรียนเสร็จสมบูรณ์!', ex_lives_remaining:'ชีวิตเหลือ', ex_completed_errors:'เสร็จแต่มีข้อผิดพลาด',
  ex_stat_correct:'ถูก', ex_stat_incorrect:'ผิด', ex_stat_accuracy:'ความแม่นยำ', ex_finish:'เสร็จสิ้น',
  ex_out_of_lives:'หมดชีวิตแล้ว!', ex_try_again_msg:'ไม่เป็นไร ลองอีกครั้ง!', ex_stat_reached:'ถึงแล้ว', ex_try_again:'ลองอีกครั้ง', ex_exit:'ออก',
  no_starred_alert:'ยังไม่มีรายการติดดาวในบทเรียนนี้ ติดดาวคำหรือประโยคในบทเรียน', starred_label:'รายการโปรด', item_label:'รายการ',
  help_tab_lessons:'📚 บทเรียน', help_tab_review:'🔄 ทบทวน', help_tab_tips:'💡 เคล็ดลับ',
  help_modal_title:'📖 วิธีใช้งาน?', help_modal_sub:'เรียนภาษาไทยง่ายๆ · คู่มือ',
  app_title_th:'เรียนภาษาไทยง่ายๆ', test_text_ph:'ข้อความทดสอบ'
};

// tr/en'e de eksik anahtarlar
const extraKeys = {
  settings_api_key: { tr:'Anthropic API Key', en:'Anthropic API Key' },
  settings_gist_ph: { tr:'ghp_... (gist yetkisi olmalı)', en:'ghp_... (needs gist scope)' },
  pron_i_m: { tr:'Ben (E)', en:'I (M)' }, pron_i_f: { tr:'Ben (K)', en:'I (F)' },
  pron_you: { tr:'Sen/Siz', en:'You' }, pron_he_she: { tr:'O', en:'He/She' },
  pron_we: { tr:'Biz', en:'We' }, pron_you_pl: { tr:'Siz(çoğul)', en:'You (pl.)' }, pron_they: { tr:'Onlar', en:'They' },
  pron_male: { tr:'Erkek', en:'Male' }, pron_female: { tr:'Kadın', en:'Female' },
  pron_polite: { tr:'Kibar, herkese', en:'Polite, universal' }, pron_same_mf: { tr:'E+K aynı kelime', en:'Same for M+F' },
  pron_casual_i: { tr:'+ samimi "ben"', en:'+ casual "I"' }, pron_group_addr: { tr:'Grup hitabı', en:'Group address' },
  pron_phuak_group: { tr:'phuak=grup', en:'phuak=group' },
  ex_q_select: { tr:'Doğru cevabı seçin', en:'Select the correct answer' },
  ex_q_listen: { tr:'Ne duyuyorsun?', en:'What do you hear?' },
  ex_q_translate: { tr:'Bu cümleyi tercüme edin', en:'Translate this sentence' },
  ex_q_wordbank: { tr:'Aşağıdaki kelimelerle cevabı oluşturun', en:'Tap words below to build answer' },
  ex_play_slow: { tr:'Yavaş dinle', en:'Play slowly' },
  ex_finish_title: { tr:'Ders Tamamlandı!', en:'Lesson Complete!' },
  ex_lives_remaining: { tr:'can kaldı', en:'lives remaining' },
  ex_completed_errors: { tr:'Hatalarla tamamlandı', en:'Completed with errors' },
  ex_stat_correct: { tr:'Doğru', en:'Correct' }, ex_stat_incorrect: { tr:'Yanlış', en:'Incorrect' },
  ex_stat_accuracy: { tr:'Doğruluk', en:'Accuracy' }, ex_finish: { tr:'Bitir', en:'Finish' },
  ex_out_of_lives: { tr:'Canların bitti!', en:'Out of lives!' },
  ex_try_again_msg: { tr:'Üzülme, tekrar dene!', en:"Don't worry, try again!" },
  ex_stat_reached: { tr:'Ulaşılan', en:'Reached' }, ex_try_again: { tr:'Tekrar Dene', en:'Try Again' }, ex_exit: { tr:'Çık', en:'Exit' },
  no_starred_alert: { tr:'Bu derse ait yıldızlı öğe yok. Dersin içinde kelime veya cümleleri yıldızlayın.', en:'No starred items for this lesson yet. Star words or sentences inside the lesson.' },
  starred_label: { tr:'Yıldızlılar', en:'Starred' }, item_label: { tr:'öğe', en:'item' },
  help_tab_lessons: { tr:'📚 Dersler', en:'📚 Lessons' }, help_tab_review: { tr:'🔄 Tekrar', en:'🔄 Review' },
  help_tab_tips: { tr:'💡 İpuçları', en:'💡 Tips' },
  help_modal_title: { tr:'📖 Nasıl Kullanılır?', en:'📖 How to Use?' },
  help_modal_sub: { tr:'Kolay Tayca Öğrenme · Rehber', en:'Easy Thai Learning · Guide' },
  app_title_th: { tr:'Kolay Tayca Öğrenme', en:'Easy Thai Learning' },
  test_text_ph: { tr:'Test metni', en:'Test text' }
};

function injectKeys(block, keys) {
  let out = block;
  for (const [k, v] of Object.entries(keys)) {
    if (!out.includes(`${k}:`)) {
      out = out.replace(/\n  \},?\n  (en|de):/, `\n    ${k}:'${v.tr}',\n  },\n  $1:`);
    }
  }
  return out;
}

// UI_LOCAL th bloğunu değiştir
const thBlock = '  th:{\n' + Object.entries(UI_TH).map(([k,v]) => `    ${k}:'${v.replace(/'/g, "\\'")}',`).join('\n') + '\n  },';
html = html.replace(/  th:\{[\s\S]*?\n  \},/, thBlock);

// tr/en'e eksik anahtarlar
for (const [k, v] of Object.entries(extraKeys)) {
  if (!html.includes(`${k}:`)) {
    html = html.replace(/(  tr:\{[\s\S]*?)(  \},\n  en:)/, (m, trBlock, rest) => {
      if (trBlock.includes(`${k}:`)) return m;
      return trBlock.replace(/(\n  \},\n  en:)/, `\n    ${k}:'${v.tr.replace(/'/g, "\\'")}',\n  },\n  en:`);
    });
    html = html.replace(/(  en:\{[\s\S]*?)(  \}\n,)/, (m, enBlock, rest) => {
      if (enBlock.includes(`${k}:`)) return m;
      return enBlock.replace(/(gist_saved:'[^']*',)/, `$1\n    ${k}:'${v.en.replace(/'/g, "\\'")}',`);
    });
  }
}

// ── s() ile değiştirmeler ──
const sReplacements = [
  ["appLang!=='tr'?'I (M)':'Ben (E)'", "s('pron_i_m')"],
  ["appLang!=='tr'?'I (F)':'Ben (K)'", "s('pron_i_f')"],
  ["appLang!=='tr'?'You':'Sen/Siz'", "s('pron_you')"],
  ["appLang!=='tr'?'He/She':'O'", "s('pron_he_she')"],
  ["appLang!=='tr'?'We':'Biz'", "s('pron_we')"],
  ["appLang!=='tr'?'You (pl.)':'Siz(çoğul)'", "s('pron_you_pl')"],
  ["appLang!=='tr'?'They':'Onlar'", "s('pron_they')"],
  ["appLang!=='tr'?'Male':'Erkek'", "s('pron_male')"],
  ["appLang!=='tr'?'Female':'Kadın'", "s('pron_female')"],
  ["appLang!=='tr'?'Polite, universal':'Kibar, herkese'", "s('pron_polite')"],
  ["appLang!=='tr'?'Same for M+F':'E+K aynı kelime'", "s('pron_same_mf')"],
  ["appLang!=='tr'?'+ casual \"I\"':'+ samimi \"ben\"'", "s('pron_casual_i')"],
  ["appLang!=='tr'?'Group address':'Grup hitabı'", "s('pron_group_addr')"],
  ["appLang!=='tr'?'phuak=group':'phuak=grup'", "s('pron_phuak_group')"],
  ["appLang!=='tr'?'Mark:':'İşaret:'", "s('ui_mark')"],
  ["appLang!=='tr'?'🔢 Basic Numbers (0–9)':'🔢 Temel Rakamlar (0–9)'", "s('ui_basic_numbers')"],
  ["appLang!=='tr'?'🔟 Tens (10–100)':'🔟 Onlar (10–100)'", "s('ui_tens')"],
  ["appLang!=='tr'?'💯 Large Units':'💯 Büyük Birimler'", "s('ui_large_units')"],
  ["appLang!=='tr'?'System:':'Sistem:'", "s('ui_system')"],
  ["appLang!=='tr'?'Starred items':'Yıldızlılar'", "s('ui_starred')"],
  ["appLang!=='tr'?'Loaded · Saved: ':'Alındı · Kaydedilme: '", "s('ui_loaded')+' · '"],
  ["appLang!=='tr'?'Error:':'Hata:'", "s('ui_error')"],
  ["appLang!=='tr'?'Not enough exercise data for this lesson.':'Bu ders için yeterli egzersiz verisi yok.'", "s('ui_exercise_fail')"],
  ["appLang!=='tr'?'Exercise error: ':'Egzersiz hatası: '", "s('ui_exercise_err')+' '"],
  ["appLang!=='tr'?'Continue':'Devam et'", "s('ui_continue')"],
  ["appLang!=='tr'?'Check':'Kontrol et'", "s('ui_check')"],
  ["appLang!=='tr'?'Correct!':'Doğru!'", "s('ui_correct')"],
  ["appLang!=='tr'?'Incorrect':'Yanlış'", "s('ui_incorrect')"],
  ["appLang!=='tr'?'Correct answer:':'Doğru cevap:'", "s('ui_correct_answer')"],
  ["appLang!=='tr'?'Select the correct answer':'Doğru cevabı seçin'", "s('ex_q_select')"],
  ["appLang!=='tr'?'What do you hear?':'Ne duyuyorsun?'", "s('ex_q_listen')"],
  ["appLang!=='tr'?'Translate this sentence':'Bu cümleyi tercüme edin'", "s('ex_q_translate')"],
  ["appLang!=='tr'?'Tap words below to build answer':'Aşağıdaki kelimelerle cevabı oluşturun'", "s('ex_q_wordbank')"],
  ["appLang!=='tr'?'Play slowly':'Yavaş dinle'", "s('ex_play_slow')"],
  ["appLang!=='tr'?'Lesson Complete!':'Ders Tamamlandı!'", "s('ex_finish_title')"],
  ["appLang!=='tr'?'lives remaining':'can kaldı'", "s('ex_lives_remaining')"],
  ["appLang!=='tr'?'Completed with errors':'Hatalarla tamamlandı'", "s('ex_completed_errors')"],
  ["en?'Correct':'Doğru'", "s('ex_stat_correct')"],
  ["en?'Incorrect':'Yanlış'", "s('ex_stat_incorrect')"],
  ["en?'Accuracy':'Doğruluk'", "s('ex_stat_accuracy')"],
  ["en?'Finish':'Bitir'", "s('ex_finish')"],
  ["en?'Out of lives!':'Canların bitti!'", "s('ex_out_of_lives')"],
  ["en?\"Don't worry, try again!\":'Üzülme, tekrar dene!'", "s('ex_try_again_msg')"],
  ["en?'Reached':'Ulaşılan'", "s('ex_stat_reached')"],
  ["en?'Try Again':'Tekrar Dene'", "s('ex_try_again')"],
  ["en?'Exit':'Çık'", "s('ex_exit')"],
];

for (const [old, neu] of sReplacements) {
  html = html.split(old).join(neu);
}

// showLessonStars
html = html.replace(
  /const en = appLang!==['"]tr['"];\s*if\(items\.length===0\)\{\s*alert\(en\?'No starred items[\s\S]*?'item':'öğe'\)/,
  `if(items.length===0){
    alert(s('no_starred_alert'));
    return;
  }
  const meta = LESSONS_META.find(m=>m.num===num);
  document.getElementById('lstar-title').textContent = (meta?meta.emoji+' '+Lf(meta,'title'):s('lesson_prefix')+' ')+' — '+s('starred_label');
  document.getElementById('lstar-count').textContent = items.length+' '+s('item_label')`
);

// exercise render - remove const en
html = html.replace(/const en = appLang!==['"]tr['"];\s*\n\s*if\(e\.type==='word-choice'/, "if(e.type==='word-choice'");
html = html.replace(/\$\{en\?'Select the correct answer':'Doğru cevabı seçin'\}/g, "${s('ex_q_select')}");
html = html.replace(/\$\{en\?'What do you hear\?':'Ne duyuyorsun\?'\}/g, "${s('ex_q_listen')}");
html = html.replace(/\$\{en\?'Translate this sentence':'Bu cümleyi tercüme edin'\}/g, "${s('ex_q_translate')}");
html = html.replace(/\$\{en\?'Tap words below to build answer':'Aşağıdaki kelimelerle cevabı oluşturun'\}/g, "${s('ex_q_wordbank')}");
html = html.replace(/\$\{en\?'Play slowly':'Yavaş dinle'\}/g, "${s('ex_play_slow')}");

// showExFinish / showExFailed
html = html.replace(/const en = appLang!==['"]tr['"];\s*const content = document\.getElementById\('ex-content'\);\s*const accuracy/g,
  "const content = document.getElementById('ex-content');\n  const accuracy");
html = html.replace(/const en = appLang!==['"]tr['"];\s*const content = document\.getElementById\('ex-content'\);\s*content\.innerHTML = `\s*<div class="ex-finish">\s*<div class="ex-finish-trophy">💔<\/div>/g,
  `const content = document.getElementById('ex-content');
  content.innerHTML = \`
    <div class="ex-finish">
      <div class="ex-finish-trophy">💔</div>`);

html = html.replace(/\$\{en\?'Lesson Complete!':'Ders Tamamlandı!'\}/g, "${s('ex_finish_title')}");
html = html.replace(/\+\(en\?'lives remaining':'can kaldı'\)/g, "+s('ex_lives_remaining')");
html = html.replace(/\+\(en\?'Completed with errors':'Hatalarla tamamlandı'\)/g, "+s('ex_completed_errors')");

// buildHelpContent: en → loc
html = html.replace(
  /function buildHelpContent\(\)\{\s*const en = appLang!==['"]tr['"];/,
  `function buildHelpContent(){
  const L = loc;`
);
html = html.replace(
  /document\.getElementById\('htab-btn-dersler'\)\.textContent = en\?'📚 Lessons':'📚 Dersler';/,
  "document.getElementById('htab-btn-dersler').textContent = s('help_tab_lessons');"
);
html = html.replace(
  /document\.getElementById\('htab-btn-tekrar'\)\.textContent  = en\?'🔄 Review':'🔄 Tekrar';/,
  "document.getElementById('htab-btn-tekrar').textContent = s('help_tab_review');"
);
html = html.replace(
  /document\.getElementById\('htab-btn-ipuclari'\)\.textContent= en\?'💡 Tips':'💡 İpuçları';/,
  "document.getElementById('htab-btn-ipuclari').textContent = s('help_tab_tips');"
);
html = html.replace(
  /document\.getElementById\('help-modal-title'\)\.textContent = en\?'📖 How to Use\?':'📖 Nasıl Kullanılır\?';/,
  "document.getElementById('help-modal-title').textContent = s('help_modal_title');"
);
html = html.replace(
  /document\.getElementById\('help-modal-sub'\)\.textContent   = en\?'Easy Thai Learning · Guide':'Kolay Tayca Öğrenme · Rehber';/,
  "document.getElementById('help-modal-sub').textContent = s('help_modal_sub');"
);

// buildHelpContent en? → L() — toplu çeviri
const helpPairs = [
  ["What is this app?","Bu uygulama ne için?","แอปนี้ใช้ทำอะไร?"],
  ["Designed to quickly learn everyday Thai used in Phuket. Focuses on real conversation, not tourist phrases.","Phuket'te günlük hayatta kullanılan Tayca'yı hızlıca öğrenmek için tasarlandı. Turistik değil, gerçek konuşma diline odaklanır.","ออกแบบมาเพื่อเรียนภาษาไทยที่ใช้ในชีวิตประจำวันที่ภูเก็ตอย่างรวดเร็ว เน้นการสนทนาจริง ไม่ใช่ประโยคนักท่องเที่ยว"],
  ["Main Tabs","Ana Sekmeler","แท็บหลัก"],
  ["Lessons","Dersler","บทเรียน"],
  ["19 lessons + BONUS vocabulary sets. Each lesson has 6–8 tabs. Green = completed.","19 ders + BONUS kelime setleri. Her ders 6–8 sekme içerir. Yeşil = tamamlandı.","19 บทเรียน + ชุดคำศัพท์ BONUS แต่ละบทมี 6–8 แท็บ สีเขียว = เสร็จแล้ว"],
  ["Test","Test","ทดสอบ"],
  ["Spaced repetition (SRS) system. Due cards today + lesson-based practice.","Aralıklı tekrar (SRS) sistemi. Bugün tekrar edilecek kartlar + ders bazlı pratik.","ระบบทบทวนแบบเว้นระยะ (SRS) การ์ดที่ครบกำหนดวันนี้ + ฝึกตามบทเรียน"],
  ["Translate","Çeviri","แปล"],
  ["Instant Thai ↔ Turkish/English translation.","Türkçe → Tayca veya Tayca → Türkçe anında çeviri.","แปลไทย ↔ ตุรกี/อังกฤษได้ทันที"],
  ["Starred","Liste","รายการโปรด"],
  ["All your starred words, examples and dialogues. Tap 📖 for sentence breakdown.","Yıldızladığın tüm kelimeler, örnekler ve diyaloglar. 📖 ile breakdown görebilirsin.","คำศัพท์ ตัวอย่างและบทสนทนาที่ติดดาวทั้งหมด แตะ 📖 เพื่อวิเคราะห์ประโยค"],
  ["Review","Tekrar","ทบทวน"],
  ["SRS algorithm surfaces the cards you struggle with most. A few minutes a day is enough.","SRS algoritması en çok zorlandığın kartları öne çıkarır. Her gün birkaç dakika yeterli.","อัลกอริทึม SRS แสดงการ์ดที่คุณยากที่สุด วันละไม่กี่นาทีก็พอ"],
  ["Audio Buttons","Ses Butonları","ปุ่มเสียง"],
  ["Normal-speed Thai audio — uses device TTS engine.","Normal hızda Thai sesi — cihazın TTS motorunu kullanır.","เสียงไทยความเร็วปกติ — ใช้ TTS ของอุปกรณ์"],
  ["Slow mode — use while learning pronunciation.","Yavaş mod — telaffuzu öğrenirken kullan.","โหมดช้า — ใช้ขณะเรียนการออกเสียง"],
  ["How are lessons structured?","Ders yapısı nasıl?","บทเรียนมีโครงสร้างอย่างไร?"],
  ["Each lesson has 6–8 tabs. Progress bar advances as you visit all of them.","Her derste 6-8 sekme var. Hepsini ziyaret ettiğinde progress bar ilerler.","แต่ละบทมี 6–8 แท็บ แถบความคืบหน้าเพิ่มขึ้นเมื่อเยี่ยมชมครบ"],
  ["Tab Descriptions","Sekme Açıklamaları","คำอธิบายแท็บ"],
  ["Words","Sözcükler","คำศัพท์"],
  ["Core vocabulary. Each word has usage tips, context notes, and 7–12 examples. Star with ⭐.","Dersin temel kelimeleri. Her kelimede ipuçları, bağlam notu ve 7–12 örnek cümle var. ⭐ ile yıldızlayabilirsin.","คำศัพท์หลัก แต่ละคำมีเคล็ดลับ บริบท และตัวอย่าง 7–12 ประโยค ติดดาวด้วย ⭐"],
  ["Tones","Tonlar","วรรณยุกต์"],
  ["Lesson 1 only. Thai's 5 tones — pitch differences and practical tips.","Sadece Ders 1'de. Thai'nin 5 tonu — her tonun ses farkı ve pratik ipuçları.","เฉพาะบทเรียนที่ 1 วรรณยุกต์ 5 เสียงของไทย — ความแตกต่างของระดับเสียงและเคล็ดลับ"],
  ["Grammar","Gramer","ไวยากรณ์"],
  ["Sentence structure rules. Formula + explanation + speakable examples. Tap 📖 for color-coded S/V/O analysis.","Cümle yapısı kuralları. Formül + açıklama + seslenebilir örnekler. 📖 ikonuna bas → renk kodlu S/V/O analizi.","กฎโครงสร้างประโยค สูตร + คำอธิบาย + ตัวอย่างที่พูดได้ แตะ 📖 เพื่อวิเคราะห์ S/V/O"],
  ["Speaking","Konuşma","การพูด"],
  ["Real-life tasks: \"Ask the price\", \"Give directions\". Practice with 🔊.","Gerçek hayat görevleri. \"Fiyat sor\", \"Yön tarif et\". 🔊 ile pratik yap.","งานจริง: \"ถามราคา\" \"บอกทาง\" ฝึกด้วย 🔊"],
  ["Dialogue","Diyalog","บทสนทนา"],
  ["Realistic dialogues between Ali and Nada. Tap ▶ Play All to listen in sequence.","Ali ve Nada arasında gerçekçi diyaloglar. ▶ Tümü ile sırayla dinle.","บทสนทนาจริงระหว่าง Ali และ Nada แตะ ▶ เล่นทั้งหมดเพื่อฟังตามลำดับ"],
  ["Listening","Dinleme","การฟัง"],
  ["Tap 🔊, listen to Thai, choose the correct option. Easy / Medium / Hard levels.","🔊'ya bas, Thai'yi dinle, doğru şıkkı seç. Kolay / Orta / Zor seviyeleri var.","แตะ 🔊 ฟังไทย เลือกคำตอบที่ถูก มีระดับ ง่าย / ปานกลาง / ยาก"],
  ["Multiple-choice questions testing the full lesson content.","Dersin tüm içeriğini test eden çoktan seçmeli sorular.","คำถามหลายตัวเลือกทดสอบเนื้อหาทั้งบท"],
  ["Numbers","Sayılar","ตัวเลข"],
  ["Lesson 2 only. All digits + compound number examples. Tap a card to hear it.","Sadece Ders 2'de. Tüm rakamlar + bileşik sayı örnekleri. Her karta dokun → sesini duy.","เฉพาะบทเรียนที่ 2 ตัวเลขทั้งหมด + ตัวอย่างตัวเลขประกอบ แตะการ์ดเพื่อฟัง"],
  ["Calculator","Hesapla","เครื่องคิดเลข"],
  ["Lesson 2 only. Enter 0–9,999,999 → Thai spelling + digit breakdown.","Sadece Ders 2'de. 0–9.999.999 arası herhangi bir sayıyı gir → Thai karşılığı + basamak dökümü.","เฉพาะบทเรียนที่ 2 ใส่ 0–9,999,999 → คำสะกดไทย + รายละเอียดหลัก"],
  ["Sentence Analysis Color Code","Cümle Analizi Renk Kodu","รหัสสีการวิเคราะห์ประโยค"],
  ["S = Subject","S = Özne","S = ประธาน"],
  ["V = Verb","V = Yüklem","V = กริยา"],
  ["O = Object","O = Nesne","O = กรรม"],
  ["Question / Neg.","Soru / Olumsuz","คำถาม / ปฏิเสธ"],
  ["Polite particle","Kibar eki","คำลงท้ายสุภาพ"],
  ["Preposition","Edat","คำบุพบท"],
  ["What is SRS?","SRS nedir?","SRS คืออะไร?"],
  ["Spaced Repetition System — shows difficult cards more often, easy cards less often. Same logic as Anki.","Aralıklı tekrar algoritması. Zorlandığın kartları daha sık, bildiğin kartları daha seyrek gösterir. Anki ile aynı mantık.","ระบบทบทวนแบบเว้นระยะ — แสดงการ์ดยากบ่อยขึ้น การ์ดง่ายน้อยลง เหมือน Anki"],
  ["How It Works","Nasıl Çalışır?","วิธีการทำงาน"],
  ["Go to Test → Lesson Practice → tap <strong>+ Add</strong> for a lesson. Adds words to SRS.","Test sekmesine gir → Ders Bazlı Pratik'ten → <strong>+ Ekle</strong>'ye bas. Kelimeleri SRS'e ekler.","ไปที่ ทดสอบ → ฝึกตามบทเรียน → แตะ <strong>+ เพิ่ม</strong> สำหรับบทเรียน เพิ่มคำลง SRS"],
  ["A card appears. Flashcard first (see Thai, guess meaning). Tap Show Answer.","Kart gösterilir. Önce flashcard (Thai'yi gör, anlamı tahmin et). Cevabı gör'e bas.","การ์ดปรากฏ แฟลชการ์ดก่อน (เห็นไทย ทายความหมาย) แตะ แสดงคำตอบ"],
  ["Rate yourself: ❌ Don't know → 😰 Hard → 👍 OK → ⚡ Easy","Kendini değerlendir: ❌ Bilmiyorum → 😰 Zor → 👍 Normal → ⚡ Kolay","ประเมินตัวเอง: ❌ ไม่รู้ → 😰 ยาก → 👍 ปกติ → ⚡ ง่าย"],
  ["Algorithm calculates the next review date. Easy = long gap, Hard = short gap.","Algoritma bir sonraki gösterim tarihini hesaplar. Kolay = uzun aralık, Zor = kısa aralık.","อัลกอริทึมคำนวณวันทบทวนถัดไป ง่าย = ช่วงยาว ยาก = ช่วงสั้น"],
  ["Complete <strong>Today's Review</strong> daily. 5–10 minutes is enough.","Her gün <strong>Bugünün Tekrarı</strong>'nı bitir. 5–10 dakika yeterli.","ทำ <strong>ทบทวนวันนี้</strong> ทุกวัน 5–10 นาทีก็พอ"],
  ["Card Types","Kart Türleri","ประเภทการ์ด"],
  ["New","Yeni","ใหม่"],
  ["Always flashcard on first show. Thai → Meaning direction.","İlk gösterimde her zaman flashcard. Thai → Anlam yönünde.","ครั้งแรกเป็นแฟลชการ์ดเสมอ ทิศทาง ไทย → ความหมาย"],
  ["Review","Tekrar","ทบทวน"],
  ["50% flashcard, 50% multiple choice. Direction changes randomly.","%50 flashcard, %50 çoktan seçmeli. Yön rastgele değişir.","50% แฟลชการ์ด 50% หลายตัวเลือก ทิศทางสุ่มเปลี่ยน"],
  ["Tip","İpucu","เคล็ดลับ"],
  ["If you finish today's review every morning, you'll permanently memorize 9 lessons' worth of vocabulary within 3 weeks.","Bugünün tekrarını her sabah bitirirsen 3 hafta içinde 9 dersin kelimelerini kalıcı ezberlersin.","ถ้าทำทบทวนวันนี้ทุกเช้า จะจำคำศัพท์ 9 บทได้ถาวรภายใน 3 สัปดาห์"],
  ["Effective Learning","Verimli Öğrenme","การเรียนรู้อย่างมีประสิทธิภาพ"],
  ["Always study with audio.","Her zaman sesli çalış.","เรียนพร้อมเสียงเสมอ"],
  ["Thai is tonal — reading alone isn't enough. Tap every card to hear it.","Thai tonal bir dil — yazıyı okumak yetmez, sesi duymak zorunlu. Karta her dokunuşta sesi dinle.","ภาษาไทยมีวรรณยุกต์ — อ่านอย่างเดียวไม่พอ ต้องได้ยินเสียง แตะทุกการ์ดเพื่อฟัง"],
  ["Use slow mode.","Yavaş modu kullan.","ใช้โหมดช้า"],
  ["When learning a new word, listen at 🐢 first, then at normal 🔊 speed.","Yeni bir kelimeyi öğrenirken önce 🐢 ile yavaş dinle, sonra 🔊 ile normal hızda.","เมื่อเรียนคำใหม่ ฟัง 🐢 ช้าก่อน แล้วค่อย 🔊 ความเร็วปกติ"],
  ["Star selectively.","Yıldızla seçici ol.","ติดดาวอย่างเลือกสรร"],
  ["Star the sentences most useful in Phuket. Quickly review them from the List tab.","Phuket'te en çok işine yarayacak cümleleri yıldızla. Liste sekmesinden hızlı tekrar yap.","ติดดาวประโยคที่มีประโยชน์ที่สุดในภูเก็ต ทบทวนเร็วจากแท็บรายการ"],
  ["Listen to dialogues.","Diyalogları dinle.","ฟังบทสนทนา"],
  ["Use ▶ Play All to listen from start to finish — for real conversation rhythm.","▶ Tümü butonuyla diyaloğu baştan sona dinle — gerçek konuşma ritmi için.","ใช้ ▶ เล่นทั้งหมดฟังตั้งแต่ต้นจนจบ — เพื่อจังหวะการสนทนาจริง"],
  ["Use sentence analysis.","Cümle analizini kullan.","ใช้การวิเคราะห์ประโยค"],
  ["Tap 📖 on any example — seeing S/V/O structure internalizes Thai grammar.","Her örnek cümlede 📖 ikonuna bas — S/V/O yapısını görünce Thai grameri içselleşir.","แตะ 📖 ในตัวอย่างใดก็ได้ — เห็นโครง S/V/O ทำให้ไวยากรณ์ไทยซึมซับ"],
  ["Don't skip SRS.","SRS'i ihmal etme.","อย่าข้าม SRS"],
  ["Spend a few minutes every day until today's review hits 0.","Bugünün tekrarı 0 karta düşene kadar her gün birkaç dakika ayır.","ใช้เวลาไม่กี่นาทีทุกวันจนกว่าทบทวนวันนี้จะเหลือ 0"],
  ["Polite particles matter.","Kibar ekleri önemli.","คำลงท้ายสุภาพสำคัญ"],
  ["ครับ (khrap) or ค่ะ (kha) without them sentences sound rude. Add them every time.","ครับ (khrap) veya ค่ะ (kha) olmadan cümle kaba kaçar. Her cümleye ekle.","ครับ (khrap) หรือ ค่ะ (kha) ไม่มีแล้วประโยคฟังหยาบ เพิ่มทุกครั้ง"],
  ["Shortcuts","Kısayollar","ทางลัด"],
  ["Tap a card/word → plays audio","Kart / kelimeye dokun → ses çalar","แตะการ์ด/คำ → เล่นเสียง"],
  ["Star button → add to / remove from List","Yıldız butonu → Liste'ye ekle / çıkar","ปุ่มดาว → เพิ่ม/ลบจากรายการ"],
  ["Analysis icon → S/V/O breakdown","Analiz ikonu → S/V/O breakdown","ไอคอนวิเคราะห์ → แยก S/V/O"],
  ["Play dialogue → listen to all lines in order","Diyalog oynat → tüm satırları sırayla dinle","เล่นบทสนทนา → ฟังทุกบรรทัดตามลำดับ"],
  ["Easy Thai Learning","Kolay Tayca Öğrenme","เรียนภาษาไทยง่ายๆ"],
  ["A Thai learning app focused on real conversation for people living in Phuket.","Phuket'te yaşayanlar için gerçek konuşma diline odaklı Tayca öğrenme uygulaması.","แอปเรียนภาษาไทยที่เน้นการสนทนาจริงสำหรับผู้ที่อาศัยในภูเก็ต"],
  ["App Info","Uygulama Bilgisi","ข้อมูลแอป"],
  ["Version","Versiyon","เวอร์ชัน"],
  ["Total Lessons","Toplam Ders","บทเรียนทั้งหมด"],
  ["BONUS sets","BONUS set","ชุด BONUS"],
  ["Per Lesson","Ders Başına","ต่อบทเรียน"],
  ["~10 words, 8 grammar, 4 dialogues","~10 kelime, 8 gramer, 4 diyalog","~10 คำ 8 ไวยากรณ์ 4 บทสนทนา"],
  ["Audio","Ses Motoru","เสียง"],
  ["Data","Veri","ข้อมูล"],
  ["localStorage (works offline)","localStorage (internet gerekmez)","localStorage (ใช้งานออฟไลน์ได้)"],
  ["Developer","Geliştirici","นักพัฒนา"],
  ["Version History","Versiyon Geçmişi","ประวัติเวอร์ชัน"],
];

for (const [en, tr, th] of helpPairs) {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const old = `\${en?'${esc(en)}':'${esc(tr)}'}`;
  const neu = `\${L('${esc(tr)}','${esc(en)}','${esc(th)}')}`;
  html = html.split(old).join(neu);
}

// changelog entries - keep English for non-tr/th or translate key ones
const changelogPairs = [
  ["Lesson menu UX aligned with English app: card redesign, hero header, practice tab (quiz removed from tabs), dark mode contrast","Ingilizce uygulama ile menu UX: kart tasarimi, hero baslik, Alistirma sekmesi, karanlik mod kontrast","ปรับ UX เมนูบทเรียน: ออกแบบการ์ดใหม่ ส่วนหัว hero แท็บฝึกฝน โหมดมืด"],
  ["Production release: lessons 10-19 live, BONUS Thai enrichment, progress bar fix","Canli surum: Ders 10-19 yayinda, BONUS Thai zenginlestirme, ilerleme cubugu duzeltmesi","เวอร์ชันใช้งานจริง: บท 10-19 BONUS ไทย แก้แถบความคืบหน้า"],
  ["Lessons 10–19 content added (beach, hospital, emergency, etc.); BONUS vocab Thai enrichment; progress bar shows scenario/bonus separately","Ders 10-19 icerik eklendi (plaj, hastane, acil vb.); BONUS kelimelere Thai karakter; ilerleme cubugu senaryo/bonus ayri gosterim","เพิ่มบท 10–19 (ชายหาด โรงพยาบาล ฉุกเฉิน) BONUS ไทย แยกแสดงสถานการณ์/bonus"],
  ["Full English/Turkish bilingual UI; dark mode; BONUS accordion; 1437-word CORE 2000 vocabulary with example sentences and grammar analysis; scroll-to-top button","Tam İngilizce/Türkçe arayüz; dark mode; BONUS accordion; 1437 kelime CORE 2000 hazinesi, örnek cümleler ve gramer analizi; yukarı çık butonu","UI สองภาษา โหมดมืด BONUS accordion คำศัพท์ CORE 2000 1437 คำ ปุ่มเลื่อนขึ้น"],
  ["60-second mandatory wait per tab — lesson can't be completed until time is up; progress bar countdown","Her sekme için 60 saniyelik zorunlu bekleme — süre dolmadan ders tamamlanamıyor","รอบังคับ 60 วินาทีต่อแท็บ — ทำบทเรียนไม่ได้จนกว่าเวลาจะหมด"],
  ["Lessons 10–19 added (all 19 lessons complete); listening format fix; lesson 17–19 dialogue speaker fix","Ders 10-19 eklendi (tüm 19 ders tamamlandı); listening format düzeltmesi","เพิ่มบท 10–19 (ครบ 19 บท) แก้รูปแบบการฟัง"],
  ["Google Cloud TTS (Chirp3-HD) integration — Orus (male) and Aoede (female) voices, Web Speech API fallback","Google Cloud TTS (Chirp3-HD) entegrasyonu — Orus (erkek) ve Aoede (kadın) sesleri","รวม Google Cloud TTS (Chirp3-HD) — เสียง Orus และ Aoede"],
  ["SRS system (Anki-style spaced repetition) · Test module (flashcard + multiple choice) · Starring + List tab · Dialogue playback · Color-coded sentence analysis · 9 full lessons","SRS sistemi · Test modülü (flashcard + çoktan seçmeli) · Yıldızlama + Liste · Diyalog oynatma · Renk kodlu cümle analizi · 9 tam ders","ระบบ SRS · โมดูลทดสอบ · ติดดาว + รายการ · เล่นบทสนทนา · วิเคราะห์ประโยค · 9 บทเรียน"],
  ["Built to help you start talking to your Thai neighbours in Phuket.<br><strong style=\"color:#0d9488;\">ขอบคุณครับ</strong>","Phuket'teki Thai komşularınla konüsmaya başlamana yardımcı olmak için yapıldı.<br><strong style=\"color:#0d9488;\">ขอบคุณครับ</strong>","สร้างขึ้นเพื่อช่วยให้คุณเริ่มคุยกับเพื่อนบ้านไทยในภูเก็ต<br><strong style=\"color:#0d9488;\">ขอบคุณครับ</strong>"],
];

for (const [en, tr, th] of changelogPairs) {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const old = `\${en?'${esc(en)}':'${esc(tr)}'}`;
  const neu = `\${L('${esc(tr)}','${esc(en)}','${esc(th)}')}`;
  html = html.split(old).join(neu);
}

// HTML statik etiketler
html = html.replace('<html lang="tr">', '<html lang="th">');
html = html.replace('<title>Kolay Tayca Öğrenme</title>', '<title data-lk="app_title_th">เรียนภาษาไทยง่ายๆ</title>');
html = html.replace(
  '<div class="setting-label">Anthropic API Key</div>',
  '<div class="setting-label" data-lk="settings_api_key">Anthropic API Key</div>'
);
html = html.replace(
  'placeholder="ghp_... (gist yetkisi olmalı)"',
  'data-lk-ph="settings_gist_ph" placeholder="ghp_... (gist yetkisi olmalı)"'
);
html = html.replace(
  'placeholder="Test metni"',
  'data-lk-ph="test_text_ph" placeholder="Test metni"'
);
html = html.replace(
  '<button id="ex-check-btn" class="ex-check-btn" disabled onclick="exBtnClick()">Kontrol et</button>',
  '<button id="ex-check-btn" class="ex-check-btn" disabled onclick="exBtnClick()" data-lk="ui_check">Kontrol et</button>'
);

// setLang: placeholder çevirisi
if (!html.includes('data-lk-ph')) {
  // already added above
}
if (!html.includes("dataset.lkPh")) {
  html = html.replace(
    "document.querySelectorAll('[data-lk]').forEach(el=>{ el.textContent=s(el.dataset.lk); });",
    "document.querySelectorAll('[data-lk]').forEach(el=>{ el.textContent=s(el.dataset.lk); });\n  document.querySelectorAll('[data-lk-ph]').forEach(el=>{ el.placeholder=s(el.dataset.lkPh); });"
  );
}

fs.writeFileSync(fp, html);
console.log('tayca-v3.html patched');

// manifest title_th
const mfp = path.join(root, 'languages', 'th', 'manifest.js');
let manifest = fs.readFileSync(mfp, 'utf8');
manifest = manifest.replace('"nativeName": "???"', '"nativeName": "ภาษาไทย"');
for (const [num, thTitle] of Object.entries(titleTh)) {
  const re = new RegExp(`("num": ${num},[\\s\\S]*?"title_en": "[^"]+")(\\s*,\\s*"hasContent")`);
  if (!manifest.includes(`"num": ${num}`) || manifest.match(new RegExp(`"num": ${num}[\\s\\S]*?title_th`))) continue;
  manifest = manifest.replace(re, `$1,\n      "title_th": "${thTitle}"$2`);
}
fs.writeFileSync(mfp, manifest);
console.log('manifest.js patched');

// kdo-ui-extra th
const extraFp = path.join(root, 'shared', 'kdo-ui-extra.js');
let extra = fs.readFileSync(extraFp, 'utf8');
if (!extra.includes('claude_api_warn') || !extra.match(/th:[\s\S]*claude_api_warn/)) {
  extra = extra.replace(
    /(th: \{[\s\S]*?pron_col_target: 'ตุรกี', gist_error:[^\n]+\n\s*gist_no_file:[^\n]+)/,
    `$1,
      claude_api_warn: 'เพิ่ม Anthropic API Key ใน ⚙️ การตั้งค่า สำหรับการแปล Claude',
      test_dir_th2tr: 'ไทย → ความหมาย', test_dir_tr2th: 'ความหมาย → ไทย',
      review_q_th2tr: '🇹🇭 ไทย → ความหมาย', review_q_tr2th: '🇹🇷 ความหมาย → ไทย',
      translate_placeholder: 'พิมพ์ไทยหรือตุรกี...',
      translate_tip: 'พิมพ์คำหรือประโยคภาษาไทยหรือตุรกี',
      settings_voices: '🔊 เสียงไทย', pron_col_english: 'ไทย',
      num_info: 'ข้ามหลักที่เป็นศูนย์ 20 = yîi-sìp (พิเศษ!) 11 = sìp-èt แตะการ์ดเพื่อฟัง 🔊',
      calc_info: 'ใส่ตัวเลขใดก็ได้ — ได้คำสะกดไทยทันที แตะ 🔊 เพื่อฟัง'`
  );
}
fs.writeFileSync(extraFp, extra);
console.log('kdo-ui-extra.js patched');

// kdo-lang-registry targetUi.th
const regFp = path.join(root, 'shared', 'kdo-lang-registry.js');
let reg = fs.readFileSync(regFp, 'utf8');
if (!reg.includes('"th": {') || !reg.match(/targetUi[\s\S]*"th":/)) {
  const thTarget = `      "th": {
        "test_dir_th2tr": "ไทย → ความหมาย",
        "test_dir_tr2th": "ความหมาย → ไทย",
        "translate_placeholder": "พิมพ์ไทยหรือตุรกี...",
        "translate_tip": "พิมพ์คำหรือประโยคภาษาไทยหรือตุรกี",
        "settings_voices": "🔊 เสียงไทย",
        "pron_col_english": "ไทย",
        "calc_info": "ใส่ตัวเลขใดก็ได้ — ได้คำสะกดไทยทันที แตะ 🔊 เพื่อฟัง",
        "num_info": "ข้ามหลักที่เป็นศูนย์ 20 = yîi-sìp (พิเศษ!) 11 = sìp-èt แตะการ์ดเพื่อฟัง 🔊",
        "review_q_th2tr": "🇹🇭 ไทย → ความหมาย",
        "review_q_tr2th": "🇹🇷 ความหมาย → ไทย"
      }`;
  reg = reg.replace(
    /("th": \{[\s\S]*?"targetUi": \{[\s\S]*?"en": \{[\s\S]*?\}\s*\})/,
    `$1,\n${thTarget}`
  );
}
fs.writeFileSync(regFp, reg);
console.log('kdo-lang-registry.js patched');
console.log('Done.');
