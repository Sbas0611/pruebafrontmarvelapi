import MD5 from "crypto-js/md5";
import { NextResponse } from "next/server";

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

export async function GET() {

  let ts = Date.now().toString();
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  const url = `${API_URL}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    return NextResponse.json(data.data.results)
  } catch (err) {
    console.error(err);
    return;
  }
};