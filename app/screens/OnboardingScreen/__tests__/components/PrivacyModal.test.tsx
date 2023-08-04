/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import renderer from "react-test-renderer"
import { PrivacyModal } from "../../components/PrivacyModal"
import { Linking } from "react-native"

describe("PrivacyModal", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PrivacyModal />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onPressSkip when skip button is pressed", () => {
    const onPressSkipMock = jest.fn()
    const { getByText } = render(<PrivacyModal onPressSkip={onPressSkipMock} />)
    const skipButton = getByText("privacy.skip undefined")

    ;(fireEvent as any).click(skipButton)

    expect(onPressSkipMock).toHaveBeenCalledTimes(1)
  })

  it("calls onPressAgree when agree button is pressed", () => {
    const onPressAgreeMock = jest.fn()
    const { getByText } = render(<PrivacyModal onPressAgree={onPressAgreeMock} />)
    const agreeButton = getByText("privacy.agree undefined")

    ;(fireEvent as any).click(agreeButton)

    expect(onPressAgreeMock).toHaveBeenCalledTimes(1)
  })

  it("opens the privacy policy URL when privacy policy text is pressed", () => {
    const { getByText } = render(<PrivacyModal />)
    const privacyPolicyText = getByText("privacy.policy undefined")

    jest.spyOn(Linking, "openURL")
    ;(fireEvent as any).click(privacyPolicyText)

    expect((Linking as any).openURL).toHaveBeenCalledWith("https://www.spotthestation.org")
  })
})
