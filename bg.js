chrome.cookies.get({
  url: "https://github.com",
  name: "dotcom_user"
}, ({ value }) =>
  chrome.declarativeNetRequest.updateSessionRules(
    value
      ? {
        addRules: [{
          id: 1,
          priority: 1e9,
          action: {
            type: "redirect",
            redirect: {
              url: "https://github.com/" + value
            }
          },
          condition: {
            resourceTypes: ["main_frame"],
            requestMethods: ["get"],
            urlFilter: "|https://github.com/|"
          }
        }],
        removeRuleIds: [1]
      }
      : {
        removeRuleIds: [1]
      }
  )
);