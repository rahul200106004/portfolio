#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Website
Tests the contact form endpoints and health check
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend environment
BACKEND_URL = "https://profile-platform-8.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_health_check():
    """Test GET /api/ - Health check endpoint"""
    print("\n=== Testing Health Check (GET /api/) ===")
    try:
        response = requests.get(f"{API_BASE}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check PASSED")
                return True
            else:
                print(f"❌ Health check FAILED - Expected 'Hello World', got: {data}")
                return False
        else:
            print(f"❌ Health check FAILED - Expected 200, got: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health check FAILED - Exception: {e}")
        return False

def test_contact_post_valid():
    """Test POST /api/contact with valid data"""
    print("\n=== Testing Contact Form POST (Valid Data) ===")
    
    test_data = {
        "name": "John Doe",
        "email": "john.doe@example.com", 
        "message": "Hello, I'm interested in your AI engineering services. Please contact me back."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 201:
            data = response.json()
            # Check if response contains expected fields
            required_fields = ["id", "name", "email", "message", "created_at"]
            if all(field in data for field in required_fields):
                if (data["name"] == test_data["name"] and 
                    data["email"] == test_data["email"] and 
                    data["message"] == test_data["message"]):
                    print("✅ Contact POST (valid) PASSED")
                    return True, data["id"]
                else:
                    print("❌ Contact POST (valid) FAILED - Data mismatch")
                    return False, None
            else:
                print(f"❌ Contact POST (valid) FAILED - Missing fields: {[f for f in required_fields if f not in data]}")
                return False, None
        else:
            print(f"❌ Contact POST (valid) FAILED - Expected 201, got: {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Contact POST (valid) FAILED - Exception: {e}")
        return False, None

def test_contact_post_validation():
    """Test POST /api/contact with validation errors"""
    print("\n=== Testing Contact Form POST (Validation Errors) ===")
    
    test_cases = [
        {
            "name": "Empty Name Test",
            "data": {"name": "", "email": "test@example.com", "message": "Test message"},
            "expected_error": "name field validation"
        },
        {
            "name": "Invalid Email Test", 
            "data": {"name": "Test User", "email": "invalid-email", "message": "Test message"},
            "expected_error": "email field validation"
        },
        {
            "name": "Empty Message Test",
            "data": {"name": "Test User", "email": "test@example.com", "message": ""},
            "expected_error": "message field validation"
        }
    ]
    
    all_passed = True
    
    for test_case in test_cases:
        print(f"\n--- {test_case['name']} ---")
        try:
            response = requests.post(f"{API_BASE}/contact", json=test_case["data"])
            print(f"Status Code: {response.status_code}")
            
            if response.status_code == 422:
                print(f"✅ {test_case['name']} PASSED - Got expected 422 validation error")
            else:
                print(f"❌ {test_case['name']} FAILED - Expected 422, got: {response.status_code}")
                print(f"Response: {response.text}")
                all_passed = False
                
        except Exception as e:
            print(f"❌ {test_case['name']} FAILED - Exception: {e}")
            all_passed = False
    
    return all_passed

def test_contact_get():
    """Test GET /api/contact - Retrieve contact messages"""
    print("\n=== Testing Contact Messages GET ===")
    
    try:
        response = requests.get(f"{API_BASE}/contact")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of messages retrieved: {len(data)}")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check structure of first message
                    first_msg = data[0]
                    required_fields = ["id", "name", "email", "message", "created_at"]
                    if all(field in first_msg for field in required_fields):
                        print("✅ Contact GET PASSED - Valid response structure")
                        print(f"Sample message: {first_msg['name']} - {first_msg['email']}")
                        return True
                    else:
                        print(f"❌ Contact GET FAILED - Missing fields in response: {[f for f in required_fields if f not in first_msg]}")
                        return False
                else:
                    print("✅ Contact GET PASSED - Empty list (no messages yet)")
                    return True
            else:
                print(f"❌ Contact GET FAILED - Expected list, got: {type(data)}")
                return False
        else:
            print(f"❌ Contact GET FAILED - Expected 200, got: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Contact GET FAILED - Exception: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    
    results = {}
    
    # Test 1: Health Check
    results["health_check"] = test_health_check()
    
    # Test 2: Contact POST with valid data
    results["contact_post_valid"], message_id = test_contact_post_valid()
    
    # Test 3: Contact POST validation errors
    results["contact_post_validation"] = test_contact_post_validation()
    
    # Test 4: Contact GET
    results["contact_get"] = test_contact_get()
    
    # Summary
    print("\n" + "="*50)
    print("📊 TEST SUMMARY")
    print("="*50)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests PASSED!")
        return 0
    else:
        print("⚠️  Some tests FAILED!")
        return 1

if __name__ == "__main__":
    sys.exit(main())