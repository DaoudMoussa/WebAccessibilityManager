import type { NextApiRequest, NextApiResponse } from 'next';
import pa11y from 'pa11y';

export type AccessibilityApiResponse = {
  data?: Awaited<ReturnType<typeof pa11y>>;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AccessibilityApiResponse>
) {
  const urlRegex = /^(http|https):\/\/[^ "]+$/;

  if (
    req.query.url &&
    typeof req.query.url === 'string' &&
    urlRegex.test(req.query.url)
  ) {
    try {
      pa11y(req.query.url).then((pa11yResponse) => {
        res
          .status(200)
          .json({ data: pa11yResponse, message: 'data retrieved' });
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: typeof err === 'string' ? err : 'generic error' });
    }
  } else {
    res.status(500).json({ message: "l' url non è fornito o è errato" });
  }
}
