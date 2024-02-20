const fetch = require("undici").fetch;
const {
    LODLE_CACHE_URL,
    KEY_ANSWERS,
    KEY_RESPONSE_BODY,
} = require("./config.json");
const AES = require("crypto-js/aes");
const UTF8 = require("crypto-js/enc-utf8");

const decrypt = (str, key) => {
    return AES.decrypt(str, key).toString(UTF8);
};

const fetchAnswers = async () => {
    const resp = await fetch(`${LODLE_CACHE_URL}?_${Date.now()}`, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.3",
        },
    });

    if (!resp.ok) return false;

    const cypheredAnswers = await resp.text();

    const rawAnswers = JSON.parse(decrypt(cypheredAnswers, KEY_RESPONSE_BODY));

    const answers = {
        america: [],
        europe: [],
    };

    Object.entries(rawAnswers).forEach(([k, v]) => {
        if (k.includes("answerName")) {
            delete rawAnswers[k];
            return;
        }

        const region = k.split("_")[2];
        k = k.replace(`_${region}`, "").replace("_answerEncrypted", "");

        answers[region][k] = JSON.parse(decrypt(v, KEY_ANSWERS));
    });

    return answers;
};

(async () => {
    console.log(await fetchAnswers());
})();
