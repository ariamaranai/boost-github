chrome.cookies.get({
  url: "https://github.com",
  name: "dotcom_user"
}, v =>
  chrome.declarativeNetRequest.updateDynamicRules(
    v ? {
      addRules: [{
        id: 1,
        priority: 1e9,
        action: {
          type: "redirect",
          redirect: {
            url: "https://github.com/" + v.value
          }
        },
        condition: {
          resourceTypes: ["main_frame"],
          requestMethods: ["get"],
          urlFilter: "|https://github.com/|",
          isUrlFilterCaseSensitive: true
        }
      }],
      removeRuleIds: [1]
    } : {
      removeRuleIds: [1]
    }
  )
);