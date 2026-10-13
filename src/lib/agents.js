[object Object], ,[object Object], = {
  ,[object Object],: ,[object Object],,
  ,[object Object],: ,[object Object],,
  ,[object Object],: ,[object Object],,
  ,[object Object],: ,[object Object],,
  ,[object Object],: ,[object Object],,
  ,[object Object],: ,[object Object],,
  ,[object Object],: ,[object Object],,
};

,[object Object], ,[object Object], ,[object Object], ,[object Object],(,[object Object],) {
  ,[object Object],
  ,[object Object], planResponse = ,[object Object], ,[object Object],(,[object Object],.,[object Object],, prompt, apiKey, provider, model);
  
  ,[object Object], plan;
  ,[object Object], {
    ,[object Object], jsonMatch = planResponse.,[object Object],(,[object Object],);
    plan = jsonMatch ? ,[object Object],.,[object Object],(jsonMatch[,[object Object],]) : { ,[object Object],: [{ ,[object Object],: ,[object Object],, ,[object Object],: prompt }] };
  } ,[object Object], {
    plan = { ,[object Object],: [{ ,[object Object],: ,[object Object],, ,[object Object],: prompt }] };
  }

  ,[object Object],
  ,[object Object], results = {};
  ,[object Object], tasks = plan.,[object Object],.,[object Object],(,[object Object], (step) => {
    ,[object Object], systemPrompt = ,[object Object],[step.,[object Object],] || ,[object Object],.,[object Object],;
    ,[object Object], response = ,[object Object], ,[object Object],(systemPrompt, step.,[object Object],, apiKey, provider, model);
    results[step.,[object Object],] = response;
  });

  ,[object Object], ,[object Object],.,[object Object],(tasks);
  ,[object Object], { plan, results };
}

,[object Object], ,[object Object], ,[object Object],(,[object Object],) {
  ,[object Object], res = ,[object Object], ,[object Object],(process.,[object Object],.,[object Object], || ,[object Object],, {
    ,[object Object],: ,[object Object],,
    ,[object Object],: {
      ,[object Object],: ,[object Object],,
      ,[object Object],: apiKey,
    },
    ,[object Object],: ,[object Object],.,[object Object],({
      provider,
      model,
      ,[object Object],: [
        { ,[object Object],: ,[object Object],, ,[object Object],: systemPrompt },
        { ,[object Object],: ,[object Object],, ,[object Object],: userMessage },
      ],
    }),
  });

  ,[object Object], (!res.,[object Object],) ,[object Object], ,[object Object], ,[object Object],(,[object Object],);
  ,[object Object], data = ,[object Object], res.,[object Object],();
  ,[object Object], data.,[object Object],?.[,[object Object],]?.,[object Object],?.,[object Object], || ,[object Object],;
}
