Feature: This feature is to verify the login functionality of rationarium app page.

    Scenario Outline: verify login functionality with <testcase_description>
        Given user launch the application
        When user enters the "<username>" and "<password>"
        Then validate the error "<message>" displayed

        Examples:
            | testcase_description                | username                     | password    | message               |
            | invalid username and valid password | vikrambiswas                 | R@tion@rium | invalidUserName_error |
            | valid username and invalid password | vikrambiswas@rationarium.com | 1           | invalidPassword_error |
