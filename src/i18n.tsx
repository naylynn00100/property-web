import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type Language = 'en' | 'my';

const messages = {
  en: {
    brand: 'Yoma Property', navFind: 'Find a home', dashboard: 'Dashboard', moderation: 'Moderation', signOut: 'Sign out', signIn: 'Sign in', listProperty: 'List a property', language: 'မြန်မာ',
    marketplace: 'Yangon & Mandalay property marketplace', heroTitle: 'Find a place that feels like home.', heroCopy: 'Browse trusted homes, rooms, land, and commercial properties in Myanmar.', fresh: 'Fresh listings', explore: 'Explore the latest', seeAll: 'See all properties →', loading: 'Loading properties…', noMatch: 'No properties match these filters. Try broadening your search.',
    searchPlaceholder: 'Search township or keyword', allCities: 'All cities', saleOrRent: 'Sale or rent', forSale: 'For sale', forRent: 'For rent', anyType: 'Any property type', anyBedrooms: 'Any bedrooms', search: 'Search', listings: 'listings', newest: 'Newest', lowHigh: 'Price: low to high', highLow: 'Price: high to low', beds: 'beds', baths: 'baths', month: 'month',
    findProperty: 'Find property', about: 'About this property', amenities: 'Amenities', noAmenities: 'No amenities listed', contact: 'Contact', revealPhone: 'Reveal phone number', monthly: 'monthly',
    createAccount: 'Create your account', welcome: 'Welcome back', fullName: 'Full name', phone: 'Phone', password: 'Password', already: 'Already have an account?', newHere: 'New here?', create: 'Create account',
    yourAccount: 'Your account', welcomeUser: 'Welcome', createListing: 'Create listing', myListings: 'My listings',
    createListingTitle: 'Create a listing', listingCopy: 'Save your property with complete details and an integer MMK price.', title: 'Title', description: 'Description', transaction: 'Transaction', propertyType: 'Property type', city: 'City', township: 'Township', address: 'Address', price: 'Price (MMK)', rentalBilling: 'Rental billing', weekly: 'Weekly', yearly: 'Yearly', other: 'Other', bedrooms: 'Bedrooms', bathrooms: 'Bathrooms', floorArea: 'Floor area (m²)', furnishing: 'Furnishing', furnishingHint: 'e.g. Fully furnished', contactName: 'Contact name', contactPhone: 'Contact phone', propertyPhoto: 'Property photo', saveReview: 'Save and send for review',
    listingModeration: 'Listing moderation', approve: 'Approve', reject: 'Reject', hide: 'Hide', backDashboard: 'Back to dashboard', error: 'Something went wrong', help: 'Help', faqTitle: 'Frequently asked questions', close: 'Close', faqBrowse: 'How do I search for a property?', faqBrowseAnswer: 'Use the search bar or filters to choose a city, transaction type, property type, and bedroom count.', faqList: 'How do I list my property?', faqListAnswer: 'Create an account, choose List a property, complete the form, and submit it for review.', faqContact: 'How do I contact an owner or agent?', faqContactAnswer: 'Open a published listing and select Reveal phone number to call the listed contact.', faqLanguage: 'Can I change the language?', faqLanguageAnswer: 'Use the language button in the header to switch between English and Burmese.',
    apartment: 'Apartment / condo', house: 'House', land: 'Land', commercial: 'Commercial', room: 'Room', photoOf: 'Photo of'
  },
  my: {
    brand: 'Yoma Property', navFind: 'အိမ်ခြံမြေရှာရန်', dashboard: 'အကောင့်စာမျက်နှာ', moderation: 'စိစစ်ရန်', signOut: 'ထွက်ရန်', signIn: 'ဝင်ရန်', listProperty: 'အိမ်ခြံမြေတင်ရန်', language: 'English',
    marketplace: 'ရန်ကုန်နှင့် မန္တလေး အိမ်ခြံမြေဈေးကွက်', heroTitle: 'သင့်အိမ်လို ခံစားရမည့်နေရာကို ရှာပါ။', heroCopy: 'မြန်မာနိုင်ငံရှိ ယုံကြည်စိတ်ချရသော အိမ်၊ အခန်း၊ မြေနှင့် စီးပွားရေးအဆောက်အအုံများကို ရှာဖွေပါ။', fresh: 'အသစ်တင်ထားသောကြော်ငြာများ', explore: 'နောက်ဆုံးကြော်ငြာများ', seeAll: 'အိမ်ခြံမြေအားလုံးကြည့်ရန် →', loading: 'တင်နေပါသည်…', noMatch: 'ဤစစ်ထုတ်မှုများနှင့် ကိုက်ညီသော အိမ်ခြံမြေမရှိပါ။ စစ်ထုတ်မှုကို လျှော့ကြည့်ပါ။',
    searchPlaceholder: 'မြို့နယ် သို့မဟုတ် သော့ချက်စာလုံးရှာရန်', allCities: 'မြို့အားလုံး', saleOrRent: 'ရောင်းရန် သို့မဟုတ် ငှားရန်', forSale: 'ရောင်းရန်', forRent: 'ငှားရန်', anyType: 'အိမ်ခြံမြေအမျိုးအစားအားလုံး', anyBedrooms: 'အိပ်ခန်းအရေအတွက်', search: 'ရှာရန်', listings: 'ကြော်ငြာ', newest: 'အသစ်ဆုံး', lowHigh: 'ဈေးနှုန်း အနိမ့်မှအမြင့်', highLow: 'ဈေးနှုန်း အမြင့်မှအနိမ့်', beds: 'အိပ်ခန်း', baths: 'ရေချိုးခန်း', month: 'လစဉ်',
    findProperty: 'အိမ်ခြံမြေရှာရန်', about: 'အိမ်ခြံမြေအကြောင်း', amenities: 'အဆင်ပြေမှုများ', noAmenities: 'အဆင်ပြေမှု မဖော်ပြထားပါ', contact: 'ဆက်သွယ်ရန်', revealPhone: 'ဖုန်းနံပါတ်ပြရန်', monthly: 'လစဉ်',
    createAccount: 'အကောင့်ဖွင့်ရန်', welcome: 'ပြန်လည်ကြိုဆိုပါသည်', fullName: 'အမည်အပြည့်အစုံ', phone: 'ဖုန်း', password: 'စကားဝှက်', already: 'အကောင့်ရှိပြီးပါပြီလား?', newHere: 'အသစ်ဖြစ်ပါသလား?', create: 'အကောင့်ဖွင့်ရန်',
    yourAccount: 'သင့်အကောင့်', welcomeUser: 'ကြိုဆိုပါသည်', createListing: 'ကြော်ငြာတင်ရန်', myListings: 'ကျွန်ုပ်၏ကြော်ငြာများ',
    createListingTitle: 'အိမ်ခြံမြေကြော်ငြာတင်ရန်', listingCopy: 'အချက်အလက်ပြည့်စုံပြီး MMK ဈေးနှုန်းအပြည့်အစုံဖြင့် သင့်အိမ်ခြံမြေကို သိမ်းဆည်းပါ။', title: 'ခေါင်းစဉ်', description: 'ဖော်ပြချက်', transaction: 'အရောင်းအဝယ်', propertyType: 'အိမ်ခြံမြေအမျိုးအစား', city: 'မြို့', township: 'မြို့နယ်', address: 'လိပ်စာ', price: 'ဈေးနှုန်း (MMK)', rentalBilling: 'ငှားရမ်းကာလ', weekly: 'အပတ်စဉ်', yearly: 'နှစ်စဉ်', other: 'အခြား', bedrooms: 'အိပ်ခန်း', bathrooms: 'ရေချိုးခန်း', floorArea: 'ကြမ်းခင်းဧရိယာ (m²)', furnishing: 'ပရိဘောဂ', furnishingHint: 'ဥပမာ - ပရိဘောဂအပြည့်အစုံ', contactName: 'ဆက်သွယ်ရန်အမည်', contactPhone: 'ဆက်သွယ်ရန်ဖုန်း', propertyPhoto: 'အိမ်ခြံမြေဓာတ်ပုံ', saveReview: 'သိမ်းပြီး စိစစ်ရန်ပို့ပါ',
    listingModeration: 'ကြော်ငြာစိစစ်ခြင်း', approve: 'အတည်ပြုရန်', reject: 'ပယ်ချရန်', hide: 'ဖျောက်ရန်', backDashboard: 'အကောင့်စာမျက်နှာသို့ပြန်ရန်', error: 'အမှားတစ်ခုဖြစ်ပွားပါသည်', help: 'အကူအညီ', faqTitle: 'မေးလေ့ရှိသောမေးခွန်းများ', close: 'ပိတ်ရန်', faqBrowse: 'အိမ်ခြံမြေကို ဘယ်လိုရှာရမလဲ?', faqBrowseAnswer: 'ရှာဖွေရေးဘား သို့မဟုတ် စစ်ထုတ်မှုများမှ မြို့၊ အရောင်းအဝယ်၊ အိမ်ခြံမြေအမျိုးအစားနှင့် အိပ်ခန်းအရေအတွက်ကို ရွေးချယ်ပါ။', faqList: 'အိမ်ခြံမြေကို ဘယ်လိုတင်ရမလဲ?', faqListAnswer: 'အကောင့်ဖွင့်ပြီး အိမ်ခြံမြေတင်ရန်ကို ရွေးချယ်ပါ။ ဖောင်ကိုဖြည့်ပြီး စိစစ်ရန်ပို့ပါ။', faqContact: 'ပိုင်ရှင် သို့မဟုတ် အကျိုးဆောင်ကို ဘယ်လိုဆက်သွယ်ရမလဲ?', faqContactAnswer: 'ထုတ်ပြန်ထားသော ကြော်ငြာကိုဖွင့်ပြီး ဖုန်းနံပါတ်ပြရန်ကို ရွေးချယ်ကာ ဖုန်းခေါ်ပါ။', faqLanguage: 'ဘာသာစကားကို ပြောင်းလို့ရပါသလား?', faqLanguageAnswer: 'အင်္ဂလိပ်နှင့် မြန်မာဘာသာစကားများအကြား ပြောင်းရန် ခေါင်းစီးရှိ ဘာသာစကားခလုတ်ကို အသုံးပြုပါ။',
    apartment: 'တိုက်ခန်း / ကွန်ဒို', house: 'အိမ်', land: 'မြေ', commercial: 'စီးပွားရေး', room: 'အခန်း', photoOf: 'ဓာတ်ပုံ -'
  }
} as const;

type Key = keyof typeof messages.en;
const I18nContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: Key) => string }>({ language: 'en', setLanguage: () => {}, t: key => messages.en[key] });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => (localStorage.getItem('property_language') as Language) || 'en');
  const setLanguage = (next: Language) => { setLanguageState(next); localStorage.setItem('property_language', next); };
  const value = useMemo(() => ({ language, setLanguage, t: (key: Key) => messages[language][key] }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() { return useContext(I18nContext); }
