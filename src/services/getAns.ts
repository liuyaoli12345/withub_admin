import axios from 'axios';

export async function avaliable_LLM() {
    let controller_url = "http://172.29.7.155:21001"
    axios.post(controller_url + '/refresh_all_workers');
    const res = await axios.post(controller_url + '/list_models');
    console.log(res.data)
    return res.data;
}

export async function getAns() {
    const apiUrl = "http://172.29.7.155:8000/v1/completions"; // 替换为实际的API端点

    const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
    },
    body: JSON.stringify({
        model: "vicuna-13b-v1.5",
        prompt: "Tell me about large language model",
        temperature: 0.7,
        max_tokens: 256,
        stop: null,
        n: 1,
        top_p: 1.0,
    }),
    };

    let ans = await fetch(apiUrl, requestOptions)
    console.log(ans)
    return ans.json()
}