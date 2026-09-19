window.KDO_LESSON = {
  "num": 9,
  "words": [
    {"id":"vi9_1","vi":"Bệnh viện","ro":"bệnh viện","tr":"Hastane","tip":"","ctx":"Sağlık","examples":[{"vi":"Đưa tôi đến bệnh viện.","ro":"đưa tôi đến bệnh viện.","tr":"Beni hastaneye götürün."}]},
    {"id":"vi9_2","vi":"Bác sĩ","ro":"bác sĩ","tr":"Doktor","tip":"","ctx":"Sağlık","examples":[{"vi":"Tôi cần gặp bác sĩ.","ro":"tôi cần gặp bác sĩ.","tr":"Doktora görünmem lazım."}]},
    {"id":"vi9_3","vi":"Đau","ro":"đau","tr":"Ağrımak, acımak","tip":"","ctx":"Sağlık","examples":[{"vi":"Tôi bị đau đầu.","ro":"tôi bị đau đầu.","tr":"Başım ağrıyor."}]},
    {"id":"vi9_4","vi":"Sốt","ro":"sốt","tr":"Ateş","tip":"","ctx":"Hastalık","examples":[{"vi":"Tôi bị sốt.","ro":"tôi bị sốt.","tr":"Ateşim var."}]},
    {"id":"vi9_5","vi":"Ho","ro":"ho","tr":"Öksürmek","tip":"","ctx":"Hastalık","examples":[{"vi":"Tôi bị ho.","ro":"tôi bị ho.","tr":"Öksürüğüm var."}]},
    {"id":"vi9_6","vi":"Thuốc","ro":"thuốc","tr":"İlaç","tip":"","ctx":"Sağlık","examples":[{"vi":"Tôi cần thuốc.","ro":"tôi cần thuốc.","tr":"İlaca ihtiyacım var."}]},
    {"id":"vi9_7","vi":"Nhà thuốc","ro":"nhà thuốc","tr":"Eczane","tip":"","ctx":"Sağlık","examples":[{"vi":"Nhà thuốc gần đây không?","ro":"nhà thuốc gần đây không?","tr":"Yakında eczane var mı?"}]},
    {"id":"vi9_8","vi":"Cấp cứu","ro":"kấp kứu","tr":"Acil servis","tip":"","ctx":"Acil","examples":[{"vi":"Gọi cấp cứu!","ro":"gọi kấp kứu!","tr":"Ambulans çağırın!"}]},
    {"id":"vi9_9","vi":"Dị ứng","ro":"dị ứng","tr":"Alerji","tip":"","ctx":"Sağlık","examples":[{"vi":"Tôi bị dị ứng.","ro":"tôi bị dị ứng.","tr":"Alerjim var."}]},
    {"id":"vi9_10","vi":"Bảo hiểm","ro":"bảo hiểm","tr":"Sigorta","tip":"","ctx":"Sağlık","examples":[{"vi":"Tôi có bảo hiểm y tế.","ro":"tôi có bảo hiểm y tế.","tr":"Sağlık sigortam var."}]},
    {"id":"vi9_11","vi":"Bị","ro":"bị","tr":"(olumsuz durum belirteci)","tip":"'Bị' istemeden olan olumsuz olaylar için kullanılır.","ctx":"Yapı","examples":[{"vi":"Tôi bị mất ví.","ro":"tôi bị mất ví.","tr":"Cüzdanımı kaybettim."}]},
    {"id":"vi9_12","vi":"Cần","ro":"kần","tr":"İhtiyaç duymak","tip":"","ctx":"Fiil","examples":[{"vi":"Tôi cần giúp đỡ.","ro":"tôi kần giúp đỡ.","tr":"Yardıma ihtiyacım var."}]}
  ],
  "grammar": [
    {
      "id": "vi9_g1",
      "title": "Bị: olumsuz durum belirteci",
      "title_en": "Bị: passive/negative event marker",
      "explanation": "'Bị' istemeden ya da kötü şekilde gerçekleşen olayları anlatır.",
      "explanation_en": "'Bị' marks events that happen to someone unintentionally or negatively.",
      "table": [
        {"pronoun": "Hastalık", "form": "bị + hastalık", "example": "Tôi bị sốt.", "tr": "Ateşim var. / Ateşe yakalandım."},
        {"pronoun": "Kaza/kayıp", "form": "bị + olay", "example": "Tôi bị mất điện thoại.", "tr": "Telefonumu kaybettim."},
        {"pronoun": "Ağrı", "form": "bị đau + yer", "example": "Tôi bị đau bụng.", "tr": "Karnım ağrıyor."}
      ],
      "note": "Bị her zaman olumsuz/istenmeyen bir durum ima eder.",
      "note_en": "'Bị' always implies an unwanted or negative situation."
    }
  ],
  "speaking": [
    {
      "id": "vi9_s1",
      "title": "Doktora git",
      "title_en": "Visit the doctor",
      "lines": [
        {"vi": "Tôi bị đau đầu và sốt.", "ro": "tôi bị đau đầu và sốt.", "tr": "Başım ağrıyor ve ateşim var."},
        {"vi": "Tôi cần gặp bác sĩ.", "ro": "tôi kần gặp bác sĩ.", "tr": "Doktora görünmem lazım."},
        {"vi": "Tôi bị dị ứng với penicillin.", "ro": "tôi bị dị ứng với penicillin.", "tr": "Penisiline alerjim var."}
      ]
    }
  ],
  "dialogue": [
    {
      "id": "vi9_d1",
      "title": "Muayenede",
      "title_en": "At the doctor's",
      "lines": [
        {"role":"Doktor","vi":"Bạn bị sao vậy?","ro":"bạn bị sao vậy?","tr":"Neyiniz var?","note":""},
        {"role":"Hasta","vi":"Tôi bị đau đầu và sốt từ hôm qua.","ro":"tôi bị đau đầu và sốt từ hôm qua.","tr":"Dünden beri başım ağrıyor ve ateşim var.","note":""},
        {"role":"Doktor","vi":"Bạn có bị ho không?","ro":"bạn có bị ho không?","tr":"Öksürüğünüz var mı?","note":""},
        {"role":"Hasta","vi":"Có, tôi bị ho nhẹ.","ro":"có, tôi bị ho nhẹ.","tr":"Evet, hafif öksürüğüm var.","note":""},
        {"role":"Doktor","vi":"Tôi kê đơn thuốc cho bạn.","ro":"tôi kê đơn thuốc cho bạn.","tr":"Size ilaç yazıyorum.","note":""}
      ]
    }
  ]
};
