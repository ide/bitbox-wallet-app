/**
 * Copyright 2021 Shift Crypto AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TFunction } from 'react-i18next';
import { Entry } from '../../components/guide/entry';
import { Guide } from '../../components/guide/guide';

interface BuyGuideProps {
    t: TFunction;
}

export default function BuyGuide({ t }: BuyGuideProps) {
  return (
    <Guide>
      <Entry key="whatAreAccounts" entry={t('guide.accounts.whatAreAccounts')} />
      <Entry key="whyIsThisUseful" entry={t('guide.accounts.whyIsThisUseful')} />
      <Entry key="recoverAccounts" entry={t('guide.accounts.recoverAccounts')} />
      <Entry key="moveFunds" entry={t('guide.accounts.moveFunds')} />
      <Entry key="howtoAddTokens" entry={t('guide.accounts.howtoAddTokens')} />
      <Entry key="howManyAccounts" entry={t('guide.accounts.howManyAccounts')} />
    </Guide>
  );
}
