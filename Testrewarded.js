(function(window) {

  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd = googletag.cmd || [];

  let bannerSlot;

  // تخصيص أنماط للإعلانات البانر (إذا كان ذلك مطلوبًا)
  let colour = "background: linear-gradient(170.1deg, #9D85FF 0%, #CF8BF3 100%)!important;";
  let clean = "background: rgba(245, 245, 245, 1)!important;";
  let black = "background: linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0) 100%)!important;";
  
  googletag.cmd.push(() => {
    // تعريف فتحة إعلان بانر (صورة)
    bannerSlot = googletag.defineSlot(
      "/22697551224/Test_ads_24_4", // يجب أن يكون هذا مسار وحدة الإعلان المناسبة لإعلان الصور
      [728, 90], // حجم الإعلان
      'div-banner-ad' // معرف HTML للعنصر الذي سيتم عرض الإعلان فيه
    );

    // إضافة خدمات إلى فتحة الإعلان
    bannerSlot.addService(googletag.pubads());

    // الاستماع إلى أحداث عند اكتمال عرض الإعلان
    googletag.pubads().addEventListener("slotRenderEnded", (event) => {
      const slot = event.slot;

      if (slot === bannerSlot) {
        var containsAds = !event.isEmpty; 
        console.log(containsAds);
        if (containsAds === true) {
          var slotId = slot.getSlotElementId();
          document.getElementById(slotId).style.cssText += (black + '');
        }

        console.group("Slot", slot.getSlotElementId(), "finished rendering.");
        console.log("Advertiser ID:", event.advertiserId);
        console.log("Campaign ID:", event.campaignId);
        console.log("Company IDs:", event.companyIds);
        console.log("Creative ID:", event.creativeId);
        console.log("Is backfill?:", event.isBackfill);
        console.log("Is empty?:", event.isEmpty);
        console.log("Label IDs:", event.labelIds);
        console.log("Line Item ID:", event.lineItemId);
        console.log("Size:", event.size);
        console.log("Slot content changed?", event.slotContentChanged);
        console.log("Source Agnostic Creative ID:", event.sourceAgnosticCreativeId);
        console.log("Source Agnostic Line Item ID:", event.sourceAgnosticLineItemId);
        console.log("Yield Group IDs:", event.yieldGroupIds);
        console.groupEnd();
      }
    });

    googletag.enableServices();
    googletag.display('div-banner-ad');
  });

}(window));
