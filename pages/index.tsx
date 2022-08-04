import Input from '@components/atoms/Input/Input';
import { Button } from '@mui/material';
import variables from '@styles/variables.module.scss';
import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import { AccessibilityApiResponse } from './api/accessibility';

const Home: NextPage = () => {
  console.log(variables['color-blue']);
  
  const [urlInput, setUrlInput] = useState<string>('');

  const [accessibilityResponse, setAccessibilityResponse] =
    useState<AccessibilityApiResponse['data']>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (urlInput) {
      const responseJson = await fetch(
        `http://localhost:3000/api/accessibility?url=${urlInput}`
      ).then();
      const response =
        await (responseJson.json() as Promise<AccessibilityApiResponse>);

      if (response.data) {
        setAccessibilityResponse(response.data);
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <Input
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          type="text"
          variant="outlined"
          color="primary"
          label="label"
          name='url'
          error={Boolean(errorMessage)}
          helperText={errorMessage ? 'errore: ' + errorMessage : undefined}
          FormHelperTextProps={{"aria-roledescription": 'error'}}
        />
        <Button variant="outlined" color="primary" type="submit">
          testa l&apos;accessibilita
        </Button>
      </form>

      {accessibilityResponse?.issues &&
        accessibilityResponse.issues.length > 0 && (
          <div>
            <h2>
              {accessibilityResponse.documentTitle} (
              {accessibilityResponse.pageUrl})
            </h2>
            <ul className="data">
              {accessibilityResponse.issues.map((issue, i) => (
                <li key={issue.code + '-' + i}>
                  <strong>{issue.selector}</strong>:{' '}
                  <span>{issue.message}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default Home;
