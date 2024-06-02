import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import { EtherscanResponse } from './types';
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Check Eligibility',
    },
    {
      action: 'tx',
      label: 'Claim & Mint',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.jpg`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'By eldarfaaiz',
  description: 'LFG',
  openGraph: {
    title: 'By eldarfaaiz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>This frame was created to mint free NFTs for all warpcast users and base builders.</h1>
    </>
  );
}